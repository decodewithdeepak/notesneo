export interface Note {
  id: string;
  title: string;
  description: string;
  subject: string;
  branch: "BTech" | "BCA" | "BBA";
  semester: number;
  unit: number | string;
  viewUrl: string;
}

export interface SearchFilters {
  title?: string;
  branch?: string;
  semester?: number;
  subject?: string;
  unit?: number;
}

export interface SearchResult {
  notes: Note[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export type BranchOption = "BTech" | "BCA" | "BBA" | "All";
