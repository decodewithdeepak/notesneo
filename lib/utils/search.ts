import { Note, SearchFilters, SearchResult } from "@/lib/types/note";

/**
 * Filter notes based on search criteria
 */
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

/**
 * Paginate notes array
 */
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

/**
 * Get unique values from notes array
 */
const getUniqueValues = <T>(notes: Note[], key: keyof Note): T[] =>
  [...new Set(notes.map((note) => note[key] as T))].sort() as T[];

/**
 * Get all unique subjects
 */
export const getAllSubjects = (notes: Note[]): string[] =>
  getUniqueValues<string>(notes, "subject");

/**
 * Get all unique branches
 */
export const getAllBranches = (notes: Note[]): string[] =>
  getUniqueValues<string>(notes, "branch");

/**
 * Get all semesters, optionally filtered by branch
 */
export function getAllSemesters(notes: Note[], branch?: string): number[] {
  const filtered =
    branch && branch !== "All"
      ? notes.filter((note) => note.branch === branch)
      : notes;
  return [...new Set(filtered.map((note) => note.semester))].sort(
    (a, b) => a - b
  );
}

/**
 * Get subjects filtered by branch and semester
 */
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
