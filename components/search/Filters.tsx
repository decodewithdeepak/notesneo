"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { buildFilterUrl, parseSearchParams, hasActiveFilters } from "@/lib/utils/search";
import { SearchFilters } from "@/lib/types/library";

type FilterKey = "library" | "framework" | "tags" | "popularity";

interface FiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export default function Filters({ filters, onFiltersChange }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [mainFilter, setMainFilter] = useState<FilterKey | null>(null);

  // Determine main filter from URL path on mount
  useEffect(() => {
    if (pathname) {
      const pathParts = pathname.split('/').filter(Boolean);
      if (pathParts.length >= 2 && pathParts[0] === 'libraries-list') {
        const filterType = pathParts[1] as FilterKey;
        if (['library', 'framework', 'tags', 'popularity'].includes(filterType)) {
          setMainFilter(filterType);
        }
      }
    }
  }, [pathname]);

  // Handle filter changes and navigation
  const handleFilterChange = (key: FilterKey, value: string | string[]) => {
    const params = new URLSearchParams(searchParams);
    const newFilters: SearchFilters = { ...filters };

    // Handle multi-select tags
    if (key === "tags") {
      const tagArray = Array.isArray(value) ? value : [value];
      const currentTags = params.getAll('tag');
      const updatedTags = [...new Set([...currentTags, ...tagArray])];

      if (updatedTags.length > 0) {
        params.delete('tag');
        updatedTags.forEach(tag => params.append('tag', tag));
        newFilters.tags = updatedTags;
      }
    } else {
      params.set(key, typeof value === 'string' ? value : value[0]);
      // Update filters object
      if (key === 'library') {
        newFilters.name = typeof value === 'string' ? value : value[0];
      } else if (key === 'framework') {
        newFilters.framework = typeof value === 'string' ? value : value[0];
      } else if (key === 'popularity') {
        newFilters.popularity = typeof value === 'string' ? value : value[0] as any;
      }
    }

    // Determine the main filter (first selected)
    if (!mainFilter) {
      setMainFilter(key);
    }

    // Build the path based on the main filter
    let path = "";

    // If user changes filter type (e.g., from library → framework)
    if (mainFilter && key !== mainFilter && ["library", "framework", "popularity", "tags"].includes(key)) {
      setMainFilter(key);
      const filterValue = typeof value === 'string' ? value : value[0];
      path = `/libraries-list/${key}/${encodeURIComponent(filterValue)}`;
      params.delete(key);
      // Remove the old main filter from params
      if (mainFilter === 'library') {
        params.delete('name');
      } else {
        params.delete(mainFilter);
      }
    } else if (mainFilter) {
      // Keep existing main filter, get its value from path or params
      const pathParts = pathname?.split('/').filter(Boolean) || [];
      let mainValue = '';

      if (pathParts.length >= 3 && pathParts[1] === mainFilter) {
        mainValue = decodeURIComponent(pathParts[2]);
      } else if (mainFilter === 'library') {
        mainValue = params.get('name') || filters.name || '';
      } else if (mainFilter === 'tags') {
        mainValue = params.get('tag') || filters.tags?.[0] || '';
      } else {
        mainValue = params.get(mainFilter) || '';
      }

      if (mainValue) {
        path = `/libraries-list/${mainFilter}/${encodeURIComponent(mainValue)}`;
        // Remove main filter from params since it's in the path
        if (mainFilter === 'library') {
          params.delete('name');
        } else if (mainFilter === 'tags') {
          params.delete('tag');
        } else {
          params.delete(mainFilter);
        }
      } else {
        // No main value yet, use the new one
        setMainFilter(key);
        const filterValue = typeof value === 'string' ? value : value[0];
        path = `/libraries-list/${key}/${encodeURIComponent(filterValue)}`;
        if (key === 'library') {
          params.delete('name');
        } else if (key === 'tags') {
          params.delete('tag');
        } else {
          params.delete(key);
        }
      }
    } else {
      // No main filter yet, set this as main
      setMainFilter(key);
      const filterValue = typeof value === 'string' ? value : value[0];
      path = `/libraries-list/${key}/${encodeURIComponent(filterValue)}`;
      if (key === 'library') {
        params.delete('name');
      } else if (key === 'tags') {
        params.delete('tag');
      } else {
        params.delete(key);
      }
    }

    // Update filters and navigate
    onFiltersChange(newFilters);
    const queryString = params.toString();
    router.push(queryString ? `${path}?${queryString}` : path);
  };

  return null; // This component is just for logic, UI is handled by QuickSearch
}

// Export helper function for use in other components
export function useFilterNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigateWithFilters = (filters: SearchFilters) => {
    // Determine first filter type
    let mainFilter: FilterKey | null = null;
    let mainValue = '';

    if (filters.name) {
      mainFilter = 'library';
      mainValue = filters.name;
    } else if (filters.framework) {
      mainFilter = 'framework';
      mainValue = filters.framework;
    } else if (filters.tags && filters.tags.length > 0) {
      mainFilter = 'tags';
      mainValue = filters.tags[0];
    } else if (filters.popularity) {
      mainFilter = 'popularity';
      mainValue = filters.popularity;
    }

    if (!mainFilter) {
      router.push('/');
      return;
    }

    // Build path with main filter value
    const params = new URLSearchParams();

    // Add additional filters to query params
    if (mainFilter === 'library' && filters.name) {
      // Name is in path, add other filters
      if (filters.framework) params.set('framework', filters.framework);
      if (filters.tags && filters.tags.length > 0) {
        filters.tags.forEach(tag => params.append('tag', tag));
      }
      if (filters.popularity) params.set('popularity', filters.popularity);
    } else if (mainFilter === 'framework' && filters.framework) {
      // Framework is in path
      if (filters.name) params.set('name', filters.name);
      if (filters.tags && filters.tags.length > 0) {
        filters.tags.forEach(tag => params.append('tag', tag));
      }
      if (filters.popularity) params.set('popularity', filters.popularity);
    } else if (mainFilter === 'tags' && filters.tags && filters.tags.length > 0) {
      // First tag is in path, rest in params
      if (filters.name) params.set('name', filters.name);
      if (filters.framework) params.set('framework', filters.framework);
      if (filters.tags.length > 1) {
        filters.tags.slice(1).forEach(tag => params.append('tag', tag));
      }
      if (filters.popularity) params.set('popularity', filters.popularity);
    } else if (mainFilter === 'popularity' && filters.popularity) {
      // Popularity is in path
      if (filters.name) params.set('name', filters.name);
      if (filters.framework) params.set('framework', filters.framework);
      if (filters.tags && filters.tags.length > 0) {
        filters.tags.forEach(tag => params.append('tag', tag));
      }
    }

    const path = `/libraries-list/${mainFilter}/${encodeURIComponent(mainValue)}`;
    const queryString = params.toString();
    router.push(queryString ? `${path}?${queryString}` : path);
  };

  return { navigateWithFilters };
}