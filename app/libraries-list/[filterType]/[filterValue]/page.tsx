'use client';

import { useSearchParams, usePathname, useParams } from 'next/navigation';
import QuickSearchBase from '@/components/search/quick-search';
import HighlightText from '@/components/ui/highlight-text';
import { parseSearchParams } from '@/lib/utils/search';

export default function FilterResultsPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();

  // Parse filters from URL
  const filters = parseSearchParams(searchParams, pathname || undefined);

  // Get filter type and value from params
  const filterType = (params?.filterType as string) || '';
  const filterValue = (params?.filterValue as string) || '';
  const displayValue = filterValue ? decodeURIComponent(filterValue) : '';

  // Generate header text based on filter type and value
  const getHeaderText = () => {
    const parts: string[] = [];

    // Add main filter value
    if (filterType === 'library') {
      parts.push(`"${displayValue}"`);
    } else if (filterType === 'framework') {
      parts.push(displayValue);
    } else if (filterType === 'tags') {
      parts.push(displayValue);
    } else if (filterType === 'popularity') {
      const popularityLabels: Record<string, string> = {
        high: 'High Popularity',
        medium: 'Medium Popularity',
        low: 'Low Popularity',
      };
      parts.push(popularityLabels[displayValue] || displayValue);
    }

    // Add additional filters from query params
    if (filterType !== 'library' && filters.name) {
      parts.push(`"${filters.name}"`);
    }
    if (filterType !== 'framework' && filters.framework) {
      parts.push(filters.framework);
    }
    if (filterType !== 'tags' && filters.tags && filters.tags.length > 0) {
      parts.push(filters.tags.join(', '));
    } else if (filterType === 'tags' && filters.tags && filters.tags.length > 1) {
      // Add additional tags beyond the first one in path
      parts.push(...filters.tags.slice(1));
    }
    if (filterType !== 'popularity' && filters.popularity) {
      const popularityLabels: Record<string, string> = {
        high: 'High Popularity',
        medium: 'Medium Popularity',
        low: 'Low Popularity',
      };
      parts.push(popularityLabels[filters.popularity] || filters.popularity);
    }

    return parts.join(' • ');
  };

  return (
    <main className='max-w-full flex flex-col gap-8 min-h-full'>
      <div className='flex-1'>
        <section className='min-w-full'>
          <div className='max-w-full mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Dynamic Header */}
            <div className='text-center py-12'>
              <h2 className='font-librebaskerville text-2xl sm:text-3xl md:text-4xl mb-4'>
                Libraries matching:{' '}
                <HighlightText>{getHeaderText()}</HighlightText>
              </h2>
              <p className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
                Browse through our curated collection of Shadcn-inspired libraries
                filtered by your selection.
              </p>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <QuickSearchBase 
          showDefaultResults={false}
          enableNavigation={true}
        />
      </div>
    </main>
  );
}

