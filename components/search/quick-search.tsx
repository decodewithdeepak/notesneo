'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { SearchableInput } from '@/components/search/searchable-input';
import { MultiSelectTags } from '@/components/search/multi-select-tags';
import { LibraryCard } from '@/components/search/library-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HighlightText from '@/components/ui/highlight-text';
import {
  filterLibraries,
  paginateLibraries,
  getAllTags,
  getAllFrameworks,
  getNameSuggestions,
  buildSearchParams,
  buildFilterUrl,
  parseSearchParams,
  hasActiveFilters,
} from '@/lib/utils/search';
import { SearchFilters } from '@/lib/types/library';
import librariesData from '@/lib/data/libraries.json';

// Type assertion for imported JSON
const libraries = librariesData as import('@/lib/types/library').Library[];

interface QuickSearchProps {
  showDefaultResults?: boolean;
  enableNavigation?: boolean;
}

export default function QuickSearch({
  showDefaultResults = true,
  enableNavigation = true,
}: QuickSearchProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Initialize filters from URL params and pathname if available
  const [filters, setFilters] = useState<SearchFilters>(() => {
    const urlFilters = parseSearchParams(searchParams, pathname || undefined);
    return urlFilters;
  });

  // Update filters when URL changes
  useEffect(() => {
    const urlFilters = parseSearchParams(searchParams, pathname || undefined);
    setFilters(urlFilters);
  }, [searchParams, pathname]);

  // Current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Get all available options for suggestions
  const allTags = useMemo(() => getAllTags(libraries), []);
  const allFrameworks = useMemo(() => getAllFrameworks(libraries), []);
  const nameSuggestions = useMemo(
    () => getNameSuggestions(libraries, filters.name || ''),
    [filters.name]
  );

  // Filter and paginate libraries
  const searchResult = useMemo(() => {
    const hasFilters = hasActiveFilters(filters);

    // If no filters and showDefaultResults is false, return empty result
    if (!hasFilters && !showDefaultResults) {
      return {
        libraries: [],
        total: 0,
        page: 1,
        pageSize: 30,
        totalPages: 0,
      };
    }

    const filtered = filterLibraries(libraries, filters);
    return paginateLibraries(filtered, currentPage, 30);
  }, [filters, currentPage, showDefaultResults]);

  // Update URL when filters change (only on user interaction, not on initial load)
  // Use a ref to track if this is the initial mount
  const isInitialMount = React.useRef(true);
  const prevFiltersRef = React.useRef<string>('');

  useEffect(() => {
    if (!enableNavigation) return;

    // Skip navigation on initial mount (filters come from URL)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevFiltersRef.current = JSON.stringify(filters);
      return;
    }

    // Only navigate if filters actually changed
    const currentFiltersString = JSON.stringify(filters);
    if (prevFiltersRef.current === currentFiltersString) {
      return;
    }

    prevFiltersRef.current = currentFiltersString;

    const hasFilters = hasActiveFilters(filters);

    // Navigate based on filter state
    if (hasFilters) {
      // Build URL with first filter as path segment: /libraries-list/{first-filter}/{value}?additional-filters
      const { path, query } = buildFilterUrl(filters);
      const url = query ? `${path}?${query}` : path;

      // Only navigate if we're not already on that URL
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        const expectedSearch = query ? `?${query}` : '';
        if (currentPath !== path || currentSearch !== expectedSearch) {
          router.push(url);
        }
      } else {
        router.push(url);
      }
    } else {
      // Navigate to home if no filters (only if not already on home)
      if (typeof window !== 'undefined' && window.location.pathname !== '/') {
        router.push('/');
      } else if (typeof window === 'undefined') {
        router.push('/');
      }
    }
  }, [filters, enableNavigation, router]);

  // Update current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Handle filter changes
  const handleNameChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      name: value || undefined,
    }));
  };

  const handleNameSelect = (value: string) => {
    setFilters(prev => ({
      ...prev,
      name: value,
    }));
    if (enableNavigation) {
      // Navigate immediately on selection
      const newFilters = { ...filters, name: value };
      const searchParams = buildSearchParams(newFilters);
      const url = `/libraries-list/library?${searchParams.toString()}`;
      router.push(url);
    }
  };

  const handleFrameworkChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      framework: value === 'All' ? undefined : value,
    }));
  };

  const handleTagsChange = (tags: string[]) => {
    setFilters(prev => ({
      ...prev,
      tags: tags.length > 0 ? tags : undefined,
    }));
  };

  const handlePopularityChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      popularity: value === 'All' ? undefined : value,
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({});
    setCurrentPage(1);
    if (enableNavigation) {
      router.push('/');
    }
  };

  // Check if any filters are active
  const hasFilters = hasActiveFilters(filters);

  return (
    <section className="">
      <div className='min-w-full flex flex-col'>
        {/* Header - Only show on home page */}
        {pathname === '/' && (
          <div className='text-center my-12'>
            <h2 className='font-librebaskerville text-2xl sm:text-3xl md:text-4xl mb-4'>
              Everything you need to&nbsp;
              <HighlightText>ship fast</HighlightText>
            </h2>
            <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
              Built-in authentication, database, emails, and more. Focus on your
              product, not the infrastructure.
            </p>
          </div>
        )}

        {/* Search Filters Grid */}
        <div
          className={
            [
              'grid grid-cols-2 md:grid-cols-4 border-y border-border',
              pathname === '/' ? '' : 'border-x'
            ].join(' ')
          }
        >
          {/* Name Search */}
          <div className='space-y-2 p-2 border-b md:border-b-0 border-r border-border'>
            <label className='text-sm font-medium'>Name</label>
            <SearchableInput
              value={filters.name || ''}
              onChange={handleNameChange}
              suggestions={nameSuggestions}
              placeholder='Search library name...'
              onSelect={handleNameSelect}
            />
            {filters.name && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleNameChange('')}
                className="h-6 px-2 text-xs"
              >
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            )}
          </div>

          {/* Framework Select */}
          <div className='space-y-2 p-2 border-b md:border-b-0 md:border-r border-border'>
            <label className='text-sm font-medium'>Framework</label>
            <Select
              value={filters.framework || 'All'}
              onValueChange={handleFrameworkChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Frameworks</SelectItem>
                {allFrameworks.map(framework => (
                  <SelectItem key={framework} value={framework}>
                    {framework}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Tags Multi-Select */}
          <div className='space-y-2 p-2 border-r border-border'>
            <label className='text-sm font-medium'>Tags</label>
            <MultiSelectTags
              selectedTags={filters.tags || []}
              availableTags={allTags}
              onChange={handleTagsChange}
              placeholder='Select tags...'
            />
          </div>

          {/* Popularity Select */}
          <div className='space-y-2 p-2'>
            <label className='text-sm font-medium'>Popularity</label>
            <Select
              value={filters.popularity || 'All'}
              onValueChange={handlePopularityChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select popularity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="high">High (20k+ stars)</SelectItem>
                <SelectItem value="medium">Medium (5k-20k stars)</SelectItem>
                <SelectItem value="low">Low (&lt;5k stars)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasFilters && (
          <div className='mb-2 flex items-center justify-between'>
            <div className='flex items-center gap-2 flex-wrap'>
              {filters.name && (
                <Badge variant="secondary" className="gap-1">
                  Name: {filters.name}
                  <button
                    onClick={() => handleNameChange('')}
                    className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {filters.framework && (
                <Badge variant="secondary" className="gap-1">
                  Framework: {filters.framework}
                  <button
                    onClick={() => handleFrameworkChange('All')}
                    className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {filters.tags && filters.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="gap-1">
                  {tag}
                  <button
                    onClick={() => handleTagsChange(filters.tags!.filter(t => t !== tag))}
                    className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {filters.popularity && (
                <Badge variant="secondary" className="gap-1">
                  Popularity: {filters.popularity}
                  <button
                    onClick={() => handlePopularityChange('All')}
                    className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="text-xs"
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Results Count */}
        {searchResult.total > 0 && (
          <div className='my-3 px-2 text-sm text-muted-foreground'>
            Found <span className='font-semibold text-foreground'>{searchResult.total}</span>{' '}
            {searchResult.total === 1 ? 'library' : 'libraries'}
            {/* {searchResult.totalPages > 1 && (
              <span>
                {' '}(Page {searchResult.page} 
                of {searchResult.totalPages})
              </span>
            )} */}
          </div>
        )}

        {/* Results Grid */}
        {searchResult.libraries.length > 0 ? (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-border'>
              {searchResult.libraries.map((library, index) => {
                const isFirstRowMobile = index < 1;
                const isFirstRowTablet = index < 2;
                const isFirstRowDesktop = index < 3;
                return (
                  <LibraryCard
                    key={library.id}
                    library={library}
                    isFirstRowMobile={isFirstRowMobile}
                    isFirstRowTablet={isFirstRowTablet}
                    isFirstRowDesktop={isFirstRowDesktop}
                  />
                );
              })}
            </div>

            {/* Pagination */}
            {searchResult.totalPages > 1 && (
              <div className='my-4'>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>

                    {/* Page numbers */}
                    {Array.from({ length: searchResult.totalPages }, (_, i) => i + 1).map(page => {
                      // Show first page, last page, current page, and pages around current
                      const showPage =
                        page === 1 ||
                        page === searchResult.totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1);

                      if (!showPage && page === currentPage - 2 && currentPage > 3) {
                        return (
                          <PaginationItem key={`ellipsis-start-${page}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      if (!showPage && page === currentPage + 2 && currentPage < searchResult.totalPages - 2) {
                        return (
                          <PaginationItem key={`ellipsis-end-${page}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }

                      if (!showPage) return null;

                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(page);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < searchResult.totalPages) {
                            setCurrentPage(currentPage + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className={currentPage === searchResult.totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className='text-center py-12 w-full text-muted-foreground'>
            <p className='text-lg mb-2'>No libraries found</p>
            <p className='text-sm'>
              {hasFilters
                ? 'Try adjusting your search filters'
                : 'Start typing to search for libraries'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

