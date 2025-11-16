import { Note, SearchFilters, SearchResult } from "@/lib/types/note";

export function filterNotes(notes: Note[], filters: SearchFilters): Note[] {
  let filtered = [...notes];

  // Filter by title (case-insensitive partial match)
  if (filters.title && filters.title.trim()) {
    const titleQuery = filters.title.trim().toLowerCase();
    filtered = filtered.filter(
      (note) =>
        note.title.toLowerCase().includes(titleQuery) ||
        note.description.toLowerCase().includes(titleQuery),
    );
  }

  // Filter by branch
  if (filters.branch && filters.branch !== "All") {
    filtered = filtered.filter((note) => note.branch === filters.branch);
  }

  // Filter by semester
  if (filters.semester) {
    filtered = filtered.filter((note) => note.semester === filters.semester);
  }

  // Filter by subject
  if (filters.subject && filters.subject.trim()) {
    filtered = filtered.filter(
      (note) => note.subject.toLowerCase() === filters.subject?.toLowerCase(),
    );
  }

  // Filter by unit
  if (filters.unit) {
    filtered = filtered.filter((note) => note.unit === filters.unit);
  }

  return filtered;
}

export function paginateNotes(
  notes: Note[],
  page: number = 1,
  pageSize: number = 30,
): SearchResult {
  const total = notes.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedNotes = notes.slice(startIndex, endIndex);

  return {
    notes: paginatedNotes,
    total,
    page,
    pageSize,
    totalPages,
  };
}

export function getAllSubjects(notes: Note[]): string[] {
  const subjectSet = new Set<string>();
  notes.forEach((note) => {
    subjectSet.add(note.subject);
  });
  return Array.from(subjectSet).sort();
}

export function getAllBranches(notes: Note[]): string[] {
  const branchSet = new Set<string>();
  notes.forEach((note) => {
    branchSet.add(note.branch);
  });
  return Array.from(branchSet).sort();
}

export function getAllSemesters(notes: Note[], branch?: string): number[] {
  let filtered = notes;
  if (branch && branch !== "All") {
    filtered = notes.filter((note) => note.branch === branch);
  }
  const semesterSet = new Set<number>();
  filtered.forEach((note) => {
    semesterSet.add(note.semester);
  });
  return Array.from(semesterSet).sort((a, b) => a - b);
}

export function getSubjectsByBranchAndSemester(
  notes: Note[],
  branch?: string,
  semester?: number,
): string[] {
  let filtered = notes;
  if (branch && branch !== "All") {
    filtered = filtered.filter((note) => note.branch === branch);
  }
  if (semester) {
    filtered = filtered.filter((note) => note.semester === semester);
  }
  const subjectSet = new Set<string>();
  filtered.forEach((note) => {
    subjectSet.add(note.subject);
  });
  return Array.from(subjectSet).sort();
}

export function getTitleSuggestions(
  notes: Note[],
  query: string,
  limit: number = 10,
): string[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const queryLower = query.trim().toLowerCase();
  const matches = notes
    .filter((note) => note.title.toLowerCase().includes(queryLower))
    .slice(0, limit)
    .map((note) => note.title);

  return matches;
}

export function getSubjectSuggestions(
  notes: Note[],
  query: string,
  limit: number = 10,
): string[] {
  if (!query || query.trim().length === 0) {
    return getAllSubjects(notes).slice(0, limit);
  }

  const queryLower = query.trim().toLowerCase();
  const allSubjects = getAllSubjects(notes);
  const matches = allSubjects
    .filter((subject) => subject.toLowerCase().includes(queryLower))
    .slice(0, limit);

  return matches;
}

export function getFirstFilterType(filters: SearchFilters): string | null {
  if (filters.title) return "title";
  if (filters.branch && filters.branch !== "All") return "branch";
  if (filters.semester) return "semester";
  if (filters.subject) return "subject";
  if (filters.unit) return "unit";
  return null;
}

export function buildSearchParams(filters: SearchFilters): URLSearchParams {
  const params = new URLSearchParams();

  // Always include all active filters in query params (for complete state)
  if (filters.title) {
    params.set("title", filters.title);
  }
  if (filters.branch && filters.branch !== "All") {
    params.set("branch", filters.branch);
  }
  if (filters.semester) {
    params.set("semester", filters.semester.toString());
  }
  if (filters.subject) {
    params.set("subject", filters.subject);
  }
  if (filters.unit) {
    params.set("unit", filters.unit.toString());
  }

  return params;
}

export function buildFilterUrl(filters: SearchFilters): {
  path: string;
  query: string;
} {
  const firstFilter = getFirstFilterType(filters);

  if (!firstFilter) {
    return { path: "/", query: "" };
  }

  // Get the value for the first filter
  let mainValue = "";
  if (firstFilter === "title" && filters.title) {
    mainValue = filters.title;
  } else if (firstFilter === "branch" && filters.branch) {
    mainValue = filters.branch;
  } else if (firstFilter === "semester" && filters.semester) {
    mainValue = filters.semester.toString();
  } else if (firstFilter === "subject" && filters.subject) {
    mainValue = filters.subject;
  } else if (firstFilter === "unit" && filters.unit) {
    mainValue = filters.unit.toString();
  }

  if (!mainValue) {
    return { path: "/", query: "" };
  }

  // Build query params with additional filters (excluding the main filter)
  const params = new URLSearchParams();

  // Add additional filters to query params
  if (firstFilter === "title") {
    if (filters.branch) params.set("branch", filters.branch);
    if (filters.semester) params.set("semester", filters.semester.toString());
    if (filters.subject) params.set("subject", filters.subject);
    if (filters.unit) params.set("unit", filters.unit.toString());
  } else if (firstFilter === "branch") {
    if (filters.title) params.set("title", filters.title);
    if (filters.semester) params.set("semester", filters.semester.toString());
    if (filters.subject) params.set("subject", filters.subject);
    if (filters.unit) params.set("unit", filters.unit.toString());
  } else if (firstFilter === "semester") {
    if (filters.title) params.set("title", filters.title);
    if (filters.branch) params.set("branch", filters.branch);
    if (filters.subject) params.set("subject", filters.subject);
    if (filters.unit) params.set("unit", filters.unit.toString());
  } else if (firstFilter === "subject") {
    if (filters.title) params.set("title", filters.title);
    if (filters.branch) params.set("branch", filters.branch);
    if (filters.semester) params.set("semester", filters.semester.toString());
    if (filters.unit) params.set("unit", filters.unit.toString());
  } else if (firstFilter === "unit") {
    if (filters.title) params.set("title", filters.title);
    if (filters.branch) params.set("branch", filters.branch);
    if (filters.semester) params.set("semester", filters.semester.toString());
    if (filters.subject) params.set("subject", filters.subject);
  }

  const query = params.toString();
  const path = `/notes-list/${firstFilter}/${encodeURIComponent(mainValue)}`;

  return { path, query };
}

export function parseSearchParams(
  searchParams: URLSearchParams | string,
  pathname?: string,
): SearchFilters {
  const params =
    typeof searchParams === "string"
      ? new URLSearchParams(searchParams)
      : searchParams;

  const filters: SearchFilters = {};

  // Parse main filter from pathname
  if (pathname) {
    const pathParts = pathname.split("/").filter(Boolean);
    if (pathParts.length >= 3 && pathParts[0] === "notes-list") {
      const filterType = pathParts[1];
      const filterValue = decodeURIComponent(pathParts[2]);

      if (filterType === "title") {
        filters.title = filterValue;
      } else if (filterType === "branch") {
        filters.branch = filterValue;
      } else if (filterType === "semester") {
        filters.semester = parseInt(filterValue);
      } else if (filterType === "subject") {
        filters.subject = filterValue;
      } else if (filterType === "unit") {
        filters.unit = parseInt(filterValue);
      }
    }
  }

  // Parse additional filters from query params
  const title = params.get("title");
  if (title && !filters.title) {
    filters.title = title;
  }

  const branch = params.get("branch");
  if (branch && !filters.branch) {
    filters.branch = branch;
  }

  const semester = params.get("semester");
  if (semester && !filters.semester) {
    filters.semester = parseInt(semester);
  }

  const subject = params.get("subject");
  if (subject && !filters.subject) {
    filters.subject = subject;
  }

  const unit = params.get("unit");
  if (unit && !filters.unit) {
    filters.unit = parseInt(unit);
  }

  return filters;
}

export function hasActiveFilters(filters: SearchFilters): boolean {
  return !!(
    (filters.title && filters.title.trim()) ||
    (filters.branch && filters.branch !== "All") ||
    filters.semester ||
    filters.subject ||
    filters.unit
  );
}
