'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Library } from '@/lib/types/library';
import { ExternalLinkIcon, StarIcon } from '../icons/icons';
import { GitForkIcon, GithubIcon, GithubRoundedIcon } from '../icons/github';

interface LibraryCardProps {
  library: Library;
  className?: string;
  isFirstRowMobile?: boolean;
  isFirstRowTablet?: boolean;
  isFirstRowDesktop?: boolean;
}

export function LibraryCard({
  library,
  className,
  isFirstRowMobile = false,
  isFirstRowTablet = false,
  isFirstRowDesktop = false,
}: LibraryCardProps) {
  // Determine which link to use (webLink takes precedence, then githubLink)
  const primaryLink = library.webLink || library.githubLink;
  const hasBothLinks = library.webLink && library.githubLink;

  // Extract GitHub username/repo from githubLink
  const getGitHubRepoInfo = (githubLink?: string): string | null => {
    if (!githubLink) return null;
    try {
      const url = new URL(githubLink);
      if (url.hostname === 'github.com') {
        // Extract path after / (e.g., "username/repo" from "https://github.com/username/repo")
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length >= 2) {
          return `${pathParts[0]}/${pathParts[1]}`;
        }
      }
    } catch (error) {
      // Invalid URL, return null
    }
    return null;
  };

  const githubRepoInfo = getGitHubRepoInfo(library.githubLink);

  return (
    <div
      className={cn(
        'group relative border-r border-b border-border bg-background hover:bg-muted/50 hover:transition-all p-4 sm:p-6',
        isFirstRowMobile && 'border-t',
        isFirstRowTablet && !isFirstRowMobile && 'md:border-t',
        isFirstRowDesktop && !isFirstRowTablet && 'lg:border-t',
        className
      )}
    >
      {/* Header with logo and name */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Logo */}
        {library.logo && (
          <div className="relative flex-shrink-0 w-12 h-12 border border-border bg-muted  p-1">
            <Image
              src={library.logo}
              alt={`${library.name} logo`}
              width={40}
              height={40}
              className="object-contain"
              onError={(e) => {
                // Hide image on error
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Name and links */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className='flex flex-col min-w-0'>
              <h3 className="line-clamp-1 overflow-hidden text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary ">
                {primaryLink ? (
                  <Link
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {library.name}
                  </Link>
                ) : (
                  library.name
                )}
              </h3>
              {githubRepoInfo && (
                <div className="w-fit text-xs rounded-full bg-muted px-1 py-0.5 flex items-center gap-1 ">
                  <GithubRoundedIcon className='size-3 inline-block shrink-0' />
                  <Link
                    href={library.githubLink!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs break-words line-clamp-1 hover:text-primary hover:underline "
                    onClick={(e) => e.stopPropagation()}
                  >
                    {githubRepoInfo}
                  </Link>
                </div>
              )}
            </div>

            {/* External links */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {library.webLink && (
                <Link
                  href={library.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary "
                  aria-label={`Visit ${library.name} website`}
                >
                  <ExternalLinkIcon className="size-5" />
                </Link>
              )}
              {library.githubLink && (
                <Link
                  href={library.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary "
                  aria-label={`View ${library.name} on GitHub`}
                >
                  <GithubIcon className="size-4.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {library.description && (
        <p className="min-h-14 text-sm sm:text-base break-words line-clamp-2 text-muted-foreground leading-relaxed mb-3 sm:mb-4">
          {library.description}
        </p>
      )}

      {/* Framework badge */}
      <div className="min-h-14 flex flex-wrap items-start gap-2 mb-3 sm:mb-4">
        <div className="relative overflow-hidden text-xs border px-1 py-0.5">
          <div className='absolute -left-0.5 -bottom-0.5 size-1 -skew-12 bg-border'/>
          <div className='absolute -left-0.5 -top-0.5 size-1 skew-12 bg-border'/>
          <div className='absolute -right-0.5 -top-0.5 size-1 -skew-12 bg-border'/>
          <div className='absolute -right-0.5 -bottom-0.5 size-1 skew-12 bg-border'/>
          {library.framework}
        </div>
        {/* Tags */}
        {library.tags.slice(0, 3).map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-xs "
          >
            {tag}
          </Badge>
        ))}
        {library.tags.length > 3 && (
          <Badge variant="secondary" className="text-xs ">
            +{library.tags.length - 3} more
          </Badge>
        )}
      </div>

      {/* GitHub stats */}
      {(library.githubStars > 0 || library.githubForks > 0) && (
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {library.githubStars > 0 && (
            <div className="flex items-center gap-1">
              <StarIcon className="h-5 w-5" />
              <span>{formatNumber(library.githubStars)}</span>
            </div>
          )}
          {library.githubForks > 0 && (
            <div className="flex items-center gap-1">
              <GitForkIcon className="size-5" />
              <span>{formatNumber(library.githubForks)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Formats large numbers (e.g., 12000 -> 12k)
 */
function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

