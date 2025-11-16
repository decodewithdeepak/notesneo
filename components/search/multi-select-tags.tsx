'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MultiSelectTagsProps {
  selectedTags: string[];
  availableTags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function MultiSelectTags({
  selectedTags,
  availableTags,
  onChange,
  placeholder = 'Select tags...',
  className,
  disabled = false,
}: MultiSelectTagsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  // Prevent double-toggling when both onSelect and pointer events fire
  const isHandlingRef = useRef<string | null>(null);

  // Clear search query when popover opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure input is ready
      setTimeout(() => {
        setSearchQuery('');
      }, 0);
    }
  }, [isOpen]);

  // Filter available tags based on search query
  // Show available tags that aren't already selected
  const filteredTags = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const available = query
      ? availableTags.filter(tag =>
        tag.toLowerCase().includes(query)
      )
      : availableTags;

    // Filter out already selected tags to avoid duplicates in the list
    return available.filter(tag => !selectedTags.includes(tag));
  }, [availableTags, searchQuery, selectedTags]);

  // Handle tag selection
  const handleToggleTag = (tag: string, e?: React.MouseEvent | KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const isSelected = selectedTags.includes(tag);
    if (isSelected) {
      // Remove tag
      const newTags = selectedTags.filter(t => t !== tag);
      onChange(newTags);
    } else {
      // Add tag
      const newTags = [...selectedTags, tag];
      onChange(newTags);
    }
    setSearchQuery(''); // Clear search after selection
    // Keep popover open so user can select multiple tags
    // Don't close the popover automatically
  };

  // Remove tag from selected tags
  const handleRemoveTag = (tag: string, e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    onChange(selectedTags.filter(t => t !== tag));
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className={cn('relative w-full', className)} ref={inputRef}>
      <Popover open={isOpen} onOpenChange={setIsOpen} modal={false}>
        <PopoverTrigger asChild>
          <button
            type="button"
            disabled={disabled}
            className={cn(
              'min-h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              'flex items-center gap-2 flex-wrap cursor-pointer text-left',
              disabled && 'cursor-not-allowed opacity-50'
            )}
          >
            {/* Selected tags as badges */}
            {selectedTags.length > 0 ? (
              <div className="flex items-center gap-1 flex-wrap flex-1">
                {selectedTags.map(tag => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs gap-1 pr-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {tag}
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemoveTag(tag, e);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          e.stopPropagation();
                          handleRemoveTag(tag, e);
                        }
                      }}
                      className="ml-1 hover:bg-destructive/20 rounded-full p-0.5 transition-colors cursor-pointer inline-flex items-center justify-center"
                      aria-label={`Remove ${tag}`}
                    >
                      <X className="h-3 w-3" />
                    </span>
                  </Badge>
                ))}
              </div>
            ) : (
              <span className="text-muted-foreground flex-1">{placeholder}</span>
            )}
            <Search className="ml-auto h-4 w-4 text-muted-foreground shrink-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[var(--radix-popover-trigger-width)] p-0"
          align="start"
          onOpenAutoFocus={(e) => {
            // Allow the input to focus, but prevent scroll
            e.preventDefault();
            // Focus the search input after a brief delay to ensure it's mounted
            setTimeout(() => {
              const input = document.querySelector('[data-slot="command-input"]') as HTMLInputElement;
              if (input) {
                input.focus();
              }
            }, 0);
          }}
        >
          <Command shouldFilter={false}>
            <CommandInput
              key={`search-input-${isOpen}`}
              placeholder="Search tags..."
              value={searchQuery}
              onValueChange={(value) => {
                // Update search query when user types - ensure we handle empty strings
                const newValue = value === undefined || value === null ? '' : String(value);
                setSearchQuery(newValue);
              }}
              onKeyDown={(e) => {
                // Prevent popover from closing on Escape if there's text
                if (e.key === 'Escape' && searchQuery) {
                  e.stopPropagation();
                  setSearchQuery('');
                }
              }}
            />
            <CommandList>
              <CommandEmpty>No tags found.</CommandEmpty>
              <CommandGroup>
                {filteredTags.slice(0, 20).map((tag, index) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <CommandItem
                      key={`${tag}-${index}`}
                      value={tag}
                      onSelect={(value) => {
                        // Handle selection from cmdk (keyboard or mouse)
                        const selectedTag = value || tag;
                        // Prevent double-handling
                        if (isHandlingRef.current === selectedTag) return;
                        isHandlingRef.current = selectedTag;
                        handleToggleTag(selectedTag);
                        // Reset flag after handling
                        setTimeout(() => {
                          if (isHandlingRef.current === selectedTag) {
                            isHandlingRef.current = null;
                          }
                        }, 50);
                        // Popover stays open for multiple selections
                      }}
                      onMouseDown={(e) => {
                        // Handle mouse click explicitly (fires before onSelect)
                        if (isHandlingRef.current !== tag) {
                          e.preventDefault();
                          isHandlingRef.current = tag;
                          handleToggleTag(tag);
                          // Reset flag after handling
                          setTimeout(() => {
                            if (isHandlingRef.current === tag) {
                              isHandlingRef.current = null;
                            }
                          }, 50);
                        }
                      }}
                      className="cursor-pointer"
                      data-value={tag}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          isSelected ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {tag}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

