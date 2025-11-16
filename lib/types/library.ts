export interface Library {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  tags: string[];
  framework: string;
  githubStars: number;
  githubForks: number;
  githubLink?: string;
  webLink?: string;
}

export interface SearchFilters {
  name?: string;
  framework?: string;
  tags?: string[];
  popularity?: string;
}

export interface SearchResult {
  libraries: Library[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export type PopularityCategory = "high" | "medium" | "low";

export type FrameworkOption = "React" | "Vue" | "Angular" | "Svelte" | "All";

