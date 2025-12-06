import { Note, SearchFilters, SearchResult } from "@/lib/types/note";

export function filterNotes(notes: Note[], filters: SearchFilters): Note[] {
  return notes.filter((note) => {
    // Title/description/subject search
    if (filters.title?.trim()) {
      const query = filters.title.trim().toLowerCase().replace(/\s+/g, " ");
      const matchesSearch = [note.title, note.description, note.subject].some(
        (field) => field.toLowerCase().includes(query)
      );
      if (!matchesSearch) return false;
    }

    // Branch filter
    if (
      filters.branch &&
      filters.branch !== "All" &&
      note.branch !== filters.branch
    ) {
      return false;
    }

    // Semester filter
    if (filters.semester && note.semester !== filters.semester) {
      return false;
    }

    // Subject filter (exact match, case-insensitive)
    if (
      filters.subject?.trim() &&
      note.subject.toLowerCase() !== filters.subject.trim().toLowerCase()
    ) {
      return false;
    }

    // Unit filter
    if (filters.unit && note.unit !== filters.unit) {
      return false;
    }

    return true;
  });
}

export function paginateNotes(
  notes: Note[],
  page: number = 1,
  pageSize: number = 30
): SearchResult {
  const total = notes.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const validPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (validPage - 1) * pageSize;

  return {
    notes: notes.slice(startIndex, startIndex + pageSize),
    total,
    page: validPage,
    pageSize,
    totalPages,
  };
}

const getUniqueValues = <T>(notes: Note[], key: keyof Note): T[] =>
  [...new Set(notes.map((note) => note[key] as T))].sort() as T[];

export const getAllSubjects = (notes: Note[]): string[] =>
  getUniqueValues<string>(notes, "subject");

export const getAllBranches = (notes: Note[]): string[] =>
  getUniqueValues<string>(notes, "branch");

export function getAllSemesters(notes: Note[], branch?: string): number[] {
  const filtered =
    branch && branch !== "All"
      ? notes.filter((note) => note.branch === branch)
      : notes;
  return [...new Set(filtered.map((note) => note.semester))].sort(
    (a, b) => a - b
  );
}

export function getSubjectsByBranchAndSemester(
  notes: Note[],
  branch?: string,
  semester?: number
): string[] {
  const filtered = notes.filter(
    (note) =>
      (!branch || branch === "All" || note.branch === branch) &&
      (!semester || note.semester === semester)
  );
  return [...new Set(filtered.map((note) => note.subject))].sort();
}

export function getTitleSuggestions(
  notes: Note[],
  query: string,
  limit: number = 10
): string[] {
  if (!query?.trim()) return [];

  const queryLower = query.trim().toLowerCase();
  return notes
    .filter((note) => note.title.toLowerCase().includes(queryLower))
    .slice(0, limit)
    .map((note) => note.title);
}

export function getSubjectSuggestions(
  notes: Note[],
  query: string,
  limit: number = 10
): string[] {
  const allSubjects = getAllSubjects(notes);

  if (!query?.trim()) {
    return allSubjects.slice(0, limit);
  }

  const queryLower = query.trim().toLowerCase();
  return allSubjects
    .filter((subject) => subject.toLowerCase().includes(queryLower))
    .slice(0, limit);
}

const isValid = (value: any): boolean => {
  if (typeof value === "string") return !!value.trim();
  if (typeof value === "number") return !isNaN(value);
  return !!value;
};

export function getFirstFilterType(filters: SearchFilters): string | null {
  const filterMap: [keyof SearchFilters, (val: any) => boolean][] = [
    ["title", isValid],
    ["branch", (val) => isValid(val) && val !== "All"],
    ["semester", isValid],
    ["subject", isValid],
    ["unit", isValid],
  ];

  for (const [key, validator] of filterMap) {
    if (filters[key] !== undefined && validator(filters[key])) {
      return key;
    }
  }
  return null;
}

export function buildSearchParams(filters: SearchFilters): URLSearchParams {
  const params = new URLSearchParams();
  const entries: [string, any][] = [
    ["title", filters.title],
    ["branch", filters.branch !== "All" ? filters.branch : undefined],
    ["semester", filters.semester],
    ["subject", filters.subject],
    ["unit", filters.unit],
  ];

  entries.forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.set(key, String(value));
    }
  });

  return params;
}

export function buildFilterUrl(filters: SearchFilters): {
  path: string;
  query: string;
} {
  const firstFilter = getFirstFilterType(filters);
  if (!firstFilter) return { path: "/", query: "" };

  const mainValue = filters[firstFilter as keyof SearchFilters];
  if (!mainValue) return { path: "/", query: "" };

  // Build params excluding the main filter
  const remainingFilters = { ...filters };
  delete remainingFilters[firstFilter as keyof SearchFilters];

  const query = buildSearchParams(remainingFilters).toString();
  const path = `/notes-list/${firstFilter}/${encodeURIComponent(
    String(mainValue)
  )}`;

  return { path, query };
}

const safeParseInt = (value: string | null): number | undefined => {
  if (!value) return undefined;
  const parsed = parseInt(value);
  return isNaN(parsed) ? undefined : parsed;
};

export function parseSearchParams(
  searchParams: URLSearchParams | string,
  pathname?: string
): SearchFilters {
  const params =
    typeof searchParams === "string"
      ? new URLSearchParams(searchParams)
      : searchParams;

  const filters: SearchFilters = {};

  // Parse from pathname
  if (pathname) {
    const pathParts = pathname.split("/").filter(Boolean);
    if (pathParts.length >= 3 && pathParts[0] === "notes-list") {
      const [, filterType, encodedValue] = pathParts;
      const filterValue = decodeURIComponent(encodedValue);

      const typeMap: Record<string, () => void> = {
        title: () => {
          filters.title = filterValue;
        },
        branch: () => {
          filters.branch = filterValue;
        },
        semester: () => {
          filters.semester = safeParseInt(filterValue);
        },
        subject: () => {
          filters.subject = filterValue;
        },
        unit: () => {
          filters.unit = safeParseInt(filterValue);
        },
      };

      typeMap[filterType]?.();
    }
  }

  // Parse from query params (only if not already set)
  const paramMap: [keyof SearchFilters, string, (v: string) => any][] = [
    ["title", "title", (v) => v],
    ["branch", "branch", (v) => v],
    ["semester", "semester", safeParseInt],
    ["subject", "subject", (v) => v],
    ["unit", "unit", safeParseInt],
  ];

  paramMap.forEach(([key, paramName, parser]) => {
    if (!filters[key]) {
      const value = params.get(paramName);
      if (value) {
        const parsed = parser(value);
        if (parsed !== undefined) {
          filters[key] = parsed as any;
        }
      }
    }
  });

  return filters;
}

export function hasActiveFilters(filters: SearchFilters): boolean {
  return !!(
    isValid(filters.title) ||
    (filters.branch && filters.branch !== "All") ||
    isValid(filters.semester) ||
    isValid(filters.subject) ||
    isValid(filters.unit)
  );
}
