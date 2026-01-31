"use client";

import React, { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Search, X, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cleanText, generateId, extractHeadings, type Heading } from "@/lib/utils/markdown-utils";

// ========================
// Code Block with Copy Button
// ========================

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  // Extract text content from React children
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      if (element.props.children) {
        return getTextContent(element.props.children);
      }
    }
    return '';
  };
  
  const textContent = getTextContent(children).replace(/\n$/, '');
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group">
      <pre className={className} {...props}>
        <code>{children}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        onClick={handleCopy}
        className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-800 hover:bg-neutral-700 border border-neutral-600"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-neutral-300" />
        )}
      </Button>
    </div>
  );
}

function useHeadingComponents(headings: Heading[]) {
  return useMemo(() => {
    const createHeading = (Tag: 'h2' | 'h3' | 'h4', level: number) =>
      ({ children, ...props }: any) => {
        const text = cleanText(children);

        // Find the matching heading by text and level
        const heading = headings.find(h => h.text === text && h.level === level);
        const id = heading ? heading.id : generateId(text);

        return <Tag id={id} {...props}>{children}</Tag>;
      };

    return {
      h2: createHeading('h2', 2),
      h3: createHeading('h3', 3),
      h4: createHeading('h4', 4),
      pre: CodeBlock, // Add custom code block component
    };
  }, [headings]);
}

// ========================
// Component 1: Markdown Content
// ========================

interface MarkdownContentProps {
  content: string;
  components: any;
}

function MarkdownContent({ content, components }: MarkdownContentProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:mr-80">
      <article className="prose prose-sm sm:prose-base prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-code:before:content-none prose-code:after:content-none prose-code:bg-neutral-200 dark:prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-table:border prose-table:border-border prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 [&_pre]:bg-neutral-900 [&_pre]:text-neutral-100 [&_pre]:border [&_pre]:border-border [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre]:overflow-x-auto [&_pre]:max-w-full [&_table]:block [&_table]:overflow-x-auto [&_table]:max-w-full">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={components}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}

// ========================
// Component 2: Outline Sidebar
// ========================

interface SearchResult {
  heading: Heading;
  matchCount: number;
  preview?: string;
}

interface OutlineSidebarProps {
  headings: Heading[];
  onHeadingClick: (id: string) => void;
  content: string;
  isMobile?: boolean;
  onClose?: () => void;
}

function OutlineSidebar({ headings, onHeadingClick, content, isMobile = false, onClose }: OutlineSidebarProps) {
  const SEARCH_STORAGE_KEY = "notesneo_outline_search";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Load search query from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SEARCH_STORAGE_KEY);
      if (stored) {
        setSearchQuery(stored);
      }
    } catch (error) {
      console.error("Error loading search query:", error);
    }
  }, []);

  // Save search query to localStorage whenever it changes
  useEffect(() => {
    try {
      if (searchQuery) {
        localStorage.setItem(SEARCH_STORAGE_KEY, searchQuery);
      } else {
        localStorage.removeItem(SEARCH_STORAGE_KEY);
      }
    } catch (error) {
      console.error("Error saving search query:", error);
    }
  }, [searchQuery]);

  const handleHeadingClick = (id: string) => {
    onHeadingClick(id);
    if (isMobile && onClose) {
      onClose();
    }
  };

  // Search through entire content and map to headings
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const lines = content.split('\n');
    const results: SearchResult[] = [];

    // Track which section each line belongs to
    let currentHeading: Heading | null = null;
    const headingMatches = new Map<string, { count: number; preview: string }>();

    lines.forEach((line, idx) => {
      // Check if this line is a heading
      const headingMatch = line.trim().match(/^(#{2,4})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = cleanText(headingMatch[2]);
        currentHeading = headings.find(h => h.text === text && h.level === level) || null;
      }

      // Check if line contains search query
      if (line.toLowerCase().includes(query) && currentHeading) {
        const existing = headingMatches.get(currentHeading.id);
        const preview = line.trim().substring(0, 100);

        if (existing) {
          existing.count++;
        } else {
          headingMatches.set(currentHeading.id, { count: 1, preview });
        }
      }
    });

    // Convert to results array
    headingMatches.forEach((data, headingId) => {
      const heading = headings.find(h => h.id === headingId);
      if (heading) {
        results.push({
          heading,
          matchCount: data.count,
          preview: data.preview,
        });
      }
    });

    setSearchResults(results);
  }, [searchQuery, headings, content]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const showNoResults = searchQuery.trim() && searchResults.length === 0;

  const containerClass = isMobile
    ? "w-full bg-background"
    : "hidden lg:block w-80 border-l border-border bg-muted/30 fixed right-0 top-16 bottom-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain";

  return (
    <aside className={containerClass}>
      {/* Search Section - Sticky */}
      <div className="px-4 py-3.5 border-b border-border bg-background sticky top-0 z-20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Search in this note..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-8 text-sm h-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            >
              <X className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
        {searchQuery && (
          <p className="text-xs text-muted-foreground mt-2">
            {searchResults.length} section{searchResults.length !== 1 ? 's' : ''} • {searchResults.reduce((sum, r) => sum + r.matchCount, 0)} match{searchResults.reduce((sum, r) => sum + r.matchCount, 0) !== 1 ? 'es' : ''}
          </p>
        )}
      </div>

      {/* Outline Section */}
      <div className="p-4">
        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
          {searchQuery ? "Search Results" : "On This Page"}
        </h3>

        {headings.length === 0 && !searchQuery ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No headings found
          </p>
        ) : showNoResults ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No matches found in this note
          </p>
        ) : searchQuery ? (
          <nav>
            <ul className="space-y-3 text-sm">
              {searchResults.map((result) => (
                <li key={result.heading.id}>
                  <button
                    onClick={() => handleHeadingClick(result.heading.id)}
                    className="w-full text-left p-2 rounded hover:bg-accent/50 transition-colors border border-border/50"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span
                        className="text-xs font-medium text-foreground"
                        dangerouslySetInnerHTML={{
                          __html: result.heading.text.replace(
                            new RegExp(`(${searchQuery})`, 'gi'),
                            '<mark class="bg-yellow-300 dark:bg-yellow-600 px-0.5">$1</mark>'
                          ),
                        }}
                      />
                      <span className="text-xs text-muted-foreground shrink-0 bg-muted px-1.5 py-0.5 rounded">
                        {result.matchCount}
                      </span>
                    </div>
                    {result.preview && (
                      <p
                        className="text-xs text-muted-foreground line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: result.preview.replace(
                            new RegExp(`(${searchQuery})`, 'gi'),
                            '<mark class="bg-yellow-300 dark:bg-yellow-600 px-0.5">$1</mark>'
                          ),
                        }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <nav>
            <ul className="space-y-2 text-sm">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
                >
                  <button
                    onClick={() => onHeadingClick(heading.id)}
                    className="w-full text-left py-1.5 px-2 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
}

// ========================
// Component 3: Main Container
// ========================

export function NoteContent({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setHeadings(extractHeadings(content));
  }, [content]);

  const components = useHeadingComponents(headings);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    const container = document.querySelector('.flex-1.min-w-0.overflow-y-auto');

    if (el && container) {
      const elTop = el.getBoundingClientRect().top;
      const containerTop = container.getBoundingClientRect().top;
      const scrollTop = container.scrollTop;
      const targetScroll = scrollTop + elTop - containerTop - 80;

      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Note Content - Independent */}
      <MarkdownContent content={content} components={components} />

      {/* Desktop Outline Sidebar - Fixed Position (Independent) */}
      <OutlineSidebar headings={headings} onHeadingClick={scrollToHeading} content={content} />

      {/* Mobile Floating Search Button */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="fixed bottom-6 left-6 h-10 w-10 rounded-full shadow-lg lg:hidden z-40"
          >
            <Search className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh] p-0">
          <SheetHeader className="px-4 py-3 border-b flex-row items-center justify-between space-y-0">
            <SheetTitle>Search & Navigate</SheetTitle>
            <SheetClose asChild>
              <Button variant="secondary" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </SheetHeader>
          <div className="overflow-y-auto h-[calc(80vh-60px)]">
            <OutlineSidebar
              headings={headings}
              onHeadingClick={scrollToHeading}
              content={content}
              isMobile={true}
              onClose={() => setIsDrawerOpen(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
