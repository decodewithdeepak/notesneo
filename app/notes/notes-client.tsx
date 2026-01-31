"use client";

import { useState, useMemo, useEffect } from "react";
import { NoteCard } from "@/components/search/note-card";
import {
  filterNotes,
  getAllBranches,
  getAllSemesters,
  getSubjectsByBranchAndSemester,
  paginateNotes,
} from "@/lib/utils/search";
import { Note, SearchFilters } from "@/lib/types/note";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Book,
  ScrollText,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const FILTERS_STORAGE_KEY = "notesneo_filters";

interface NotesClientProps {
  notes: Note[];
}

export function NotesClient({ notes }: NotesClientProps) {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialized, setIsInitialized] = useState(false);
  const pageSize = 30;

  // Load cached filters from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cachedFilters = localStorage.getItem(FILTERS_STORAGE_KEY);
      if (cachedFilters) {
        try {
          const parsed = JSON.parse(cachedFilters);
          setFilters(parsed);
        } catch (error) {
          console.error("Failed to parse cached filters", error);
        }
      }
      setIsInitialized(true);
    }
  }, []);

  // Save filters to localStorage whenever they change (only after initial load)
  useEffect(() => {
    if (typeof window !== "undefined" && isInitialized) {
      localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
    }
  }, [filters, isInitialized]);

  // Get available options - branches are always static
  const branches = useMemo(() => getAllBranches(notes), [notes]);

  // Semesters filtered by selected branch
  const semesters = useMemo(() => {
    return getAllSemesters(notes, filters.branch);
  }, [notes, filters.branch]);

  // Subjects filtered by selected branch and semester
  const subjects = useMemo(() => {
    return getSubjectsByBranchAndSemester(
      notes,
      filters.branch,
      filters.semester
    );
  }, [notes, filters.branch, filters.semester]);

  // Validate filters when dropdown options change
  useEffect(() => {
    if (filters.semester && !semesters.includes(filters.semester)) {
      setFilters(prev => ({ ...prev, semester: undefined, subject: undefined }));
    }
    if (filters.subject && !subjects.includes(filters.subject)) {
      setFilters(prev => ({ ...prev, subject: undefined }));
    }
  }, [semesters, subjects, filters.semester, filters.subject]);

  // Filter notes based on all criteria
  const filteredNotes = useMemo(() => {
    // Combine searchQuery into filters.title for single-pass filtering
    const combinedFilters = {
      ...filters,
      title: searchQuery.trim() || filters.title,
    };

    return filterNotes(notes, combinedFilters);
  }, [notes, filters, searchQuery]);

  // Paginate filtered notes
  const paginatedResult = useMemo(() => {
    return paginateNotes(filteredNotes, currentPage, pageSize);
  }, [filteredNotes, currentPage]);

  // Reset to page 1 when filters or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchQuery]);

  const handleBranchChange = (value: string) => {
    setFilters(() => ({
      branch: value === "all" ? undefined : value,
      // Reset semester and subject when branch changes
      semester: undefined,
      subject: undefined,
    }));
  };

  const handleSemesterChange = (value: string) => {
    const newSemester = value === "all" ? undefined : parseInt(value);
    setFilters((prev) => ({
      ...prev,
      semester: newSemester,
      // Reset subject when semester changes
      subject: undefined,
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      subject: value === "all" ? undefined : value,
    }));
  };

  const showEmptyState = !filters.branch && !filters.semester && !filters.subject && !searchQuery.trim();

  return (
    <main className="max-w-full flex flex-col gap-8 min-h-full">
      <div className="flex-1">
        {/* Page Header */}
        <section className="min-w-full border-b border-border">
          <div className="max-w-full mx-auto px-0 py-8">
            <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold mb-2">
              Academic Notes
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Browse our collection of high-quality academic notes
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="min-w-full border-x border-b border-border bg-background">
          <div className="max-w-full mx-auto p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10"
                />
              </div>

              {/* Branch Filter */}
              <Select
                value={filters.branch || "all"}
                onValueChange={handleBranchChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Select Branch</SelectItem>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>
                      {branch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Semester Filter */}
              <Select
                value={filters.semester?.toString() || "all"}
                onValueChange={handleSemesterChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Select Semester</SelectItem>
                  {semesters.map((semester) => (
                    <SelectItem key={semester} value={semester.toString()}>
                      Semester {semester}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Subject Filter */}
              <Select
                value={filters.subject || "all"}
                onValueChange={handleSubjectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Select Subject</SelectItem>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Notes Display */}
        <section className="min-w-full">
          <div className="max-w-full mx-auto px-0 py-8">
            {showEmptyState ? (
              // Empty State
              <div className="text-center py-8">
                <h2 className="font-librebaskerville text-2xl sm:text-3xl mb-4">
                  Select Your Course
                </h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Choose your branch, semester, and subject to access your study
                  materials
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="border border-border p-6 bg-background hover:bg-muted/50 transition-colors">
                    <div className="inline-flex p-3 border border-border bg-muted mb-4">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Multiple Branches
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Access notes for BTech, BCA, and BBA courses
                    </p>
                  </div>

                  <div className="border border-border p-6 bg-background hover:bg-muted/50 transition-colors">
                    <div className="inline-flex p-3 border border-border bg-muted mb-4">
                      <Book className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Organized by Semester
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Find notes organized by semester for easy navigation
                    </p>
                  </div>

                  <div className="border border-border p-6 bg-background hover:bg-muted/50 transition-colors">
                    <div className="inline-flex p-3 border border-border bg-muted mb-4">
                      <ScrollText className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Comprehensive Coverage
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete notes for all subjects in your curriculum
                    </p>
                  </div>
                </div>
              </div>
            ) : paginatedResult.total > 0 ? (
              // Notes Grid
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {(currentPage - 1) * pageSize + 1} -{" "}
                    {Math.min(currentPage * pageSize, paginatedResult.total)} of{" "}
                    {paginatedResult.total}{" "}
                    {paginatedResult.total === 1 ? "note" : "notes"}
                    {filters.branch && ` • ${filters.branch}`}
                    {filters.semester && ` • Semester ${filters.semester}`}
                    {filters.subject && ` • ${filters.subject}`}
                  </p>
                  {paginatedResult.totalPages > 1 && (
                    <p className="text-sm text-muted-foreground">
                      Page {currentPage} of {paginatedResult.totalPages}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
                  {paginatedResult.notes.map((note, index) => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      isFirstRowMobile={index === 0}
                      isFirstRowTablet={index < 2}
                      isFirstRowDesktop={index < 3}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {paginatedResult.totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(1, prev - 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>

                    <div className="flex items-center gap-1">
                      {Array.from(
                        { length: paginatedResult.totalPages },
                        (_, i) => i + 1
                      ).map((page) => {
                        // Show first, last, current, and pages around current
                        const showPage =
                          page === 1 ||
                          page === paginatedResult.totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1);

                        if (!showPage) {
                          // Show ellipsis
                          if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return (
                              <span
                                key={page}
                                className="px-2 text-muted-foreground"
                              >
                                ...
                              </span>
                            );
                          }
                          return null;
                        }

                        return (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => {
                              setCurrentPage(page);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="min-w-10"
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setCurrentPage((prev) =>
                          Math.min(paginatedResult.totalPages, prev + 1)
                        );
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={currentPage === paginatedResult.totalPages}
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              // No Results
              <div className="text-center py-8">
                <h2 className="font-librebaskerville text-2xl mb-4">
                  No Notes Found
                </h2>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
