"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileText,
  ListChecks,
  FileQuestion,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Note } from "@/lib/types/note";

interface NotesSidebarProps {
  notes: Note[];
}

interface GroupedNotes {
  [semester: string]: {
    [subject: string]: Note[];
  };
}

export function NotesSidebar({ notes }: NotesSidebarProps) {
  const pathname = usePathname();
  const [expandedSemesters, setExpandedSemesters] = useState<Set<string>>(
    new Set(),
  );
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(
    new Set(),
  );

  // Auto-expand current note's semester and subject
  useEffect(() => {
    const activeNote = notes.find((note) => note.viewUrl === pathname);
    if (activeNote) {
      const semKey = `${activeNote.semester}`;
      const subjectKey = `${activeNote.semester}-${activeNote.subject}`;

      setExpandedSemesters((prev) => new Set(prev).add(semKey));
      setExpandedSubjects((prev) => new Set(prev).add(subjectKey));
    }
  }, [pathname, notes]);

  // Group notes by semester and subject
  const groupedNotes: GroupedNotes = notes.reduce((acc, note) => {
    const semKey = `${note.semester}`;
    const subjectKey = note.subject;

    if (!acc[semKey]) {
      acc[semKey] = {};
    }
    if (!acc[semKey][subjectKey]) {
      acc[semKey][subjectKey] = [];
    }
    acc[semKey][subjectKey].push(note);
    return acc;
  }, {} as GroupedNotes);

  // Sort semesters
  const sortedSemesters = Object.keys(groupedNotes).sort(
    (a, b) => parseInt(a) - parseInt(b),
  );

  const toggleSemester = (sem: string) => {
    const newExpanded = new Set(expandedSemesters);
    if (newExpanded.has(sem)) {
      newExpanded.delete(sem);
    } else {
      newExpanded.add(sem);
    }
    setExpandedSemesters(newExpanded);
  };

  const toggleSubject = (key: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedSubjects(newExpanded);
  };

  const getUnitIcon = (unit: number | string) => {
    if (unit === "SYLLABUS") return ListChecks;
    if (unit === "PYQ" || unit === "PYQ PAPERS") return FileQuestion;
    return FileText;
  };

  const getUnitLabel = (unit: number | string) => {
    if (typeof unit === "string") return unit;
    return `Unit ${unit}`;
  };

  return (
    <aside className="hidden lg:block w-72 border-r border-border bg-muted/30 h-full overflow-y-auto shrink-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain">
      <div className="px-4 py-4 border-b border-border bg-background">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-base">Course Notes</h2>
        </div>
      </div>

      <div className="p-4">
        <nav className="space-y-1">
          {sortedSemesters.map((semester) => {
            const isExpanded = expandedSemesters.has(semester);
            const subjects = Object.keys(groupedNotes[semester]).sort();

            return (
              <div key={semester}>
                {/* Semester Header */}
                <button
                  onClick={() => toggleSemester(semester)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  )}
                  <span>Semester {semester}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {subjects.length} subjects
                  </span>
                </button>

                {/* Subjects under this semester */}
                {isExpanded && (
                  <div className="ml-2 mt-1 space-y-1">
                    {subjects.map((subject) => {
                      const subjectKey = `${semester}-${subject}`;
                      const isSubjectExpanded =
                        expandedSubjects.has(subjectKey);
                      const subjectNotes = groupedNotes[semester][subject].sort(
                        (a, b) => {
                          // Sort: SYLLABUS first (0), then Units 1-4 (1-4), then PYQ (5)
                          const getOrder = (unit: number | string): number => {
                            if (unit === "SYLLABUS") return 0;
                            if (unit === "PYQ" || unit === "PYQ PAPERS")
                              return 5;
                            if (typeof unit === "number") return unit;
                            return 99;
                          };

                          return getOrder(a.unit) - getOrder(b.unit);
                        },
                      );

                      return (
                        <div key={subjectKey}>
                          {/* Subject Header */}
                          <button
                            onClick={() => toggleSubject(subjectKey)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                          >
                            {isSubjectExpanded ? (
                              <ChevronDown className="h-3 w-3 shrink-0" />
                            ) : (
                              <ChevronRight className="h-3 w-3 shrink-0" />
                            )}
                            <span className="font-medium">{subject}</span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              {subjectNotes.length}
                            </span>
                          </button>

                          {/* Notes under this subject */}
                          {isSubjectExpanded && (
                            <div className="ml-4 mt-1 space-y-0.5">
                              {subjectNotes.map((note) => {
                                const Icon = getUnitIcon(note.unit);
                                const isActive = pathname === note.viewUrl;

                                return (
                                  <Link
                                    key={note.id}
                                    href={note.viewUrl}
                                    target={
                                      note.viewUrl.startsWith("/")
                                        ? undefined
                                        : "_blank"
                                    }
                                    rel={
                                      note.viewUrl.startsWith("/")
                                        ? undefined
                                        : "noopener noreferrer"
                                    }
                                    className={cn(
                                      "flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors",
                                      isActive
                                        ? "bg-primary text-primary-foreground font-medium"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent",
                                    )}
                                  >
                                    <Icon className="h-3.5 w-3.5 shrink-0" />
                                    <span className="truncate">
                                      {getUnitLabel(note.unit)}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
