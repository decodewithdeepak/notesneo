import { notes as pdfNotes } from "@/lib/data/notes";
import { getMarkdownNotes } from "@/lib/markdown";
import type { Note } from "@/lib/types/note";

/**
 * Unified notes fetcher - combines PDF and Markdown notes
 * Use this in server components only
 */
export async function getAllNotes(): Promise<Note[]> {
  const markdownNotes = await getMarkdownNotes();
  return [...pdfNotes, ...markdownNotes];
}

// Note: filterNotes has been moved to lib/utils/search.ts
// Import from there: import { filterNotes } from "@/lib/utils/search";
