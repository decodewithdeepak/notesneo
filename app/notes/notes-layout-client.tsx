"use client";

import { NotesSidebar } from "@/components/notes/notes-sidebar";
import type { Note } from "@/lib/types/note";

interface NotesLayoutClientProps {
  notes: Note[];
  children: React.ReactNode;
}

export function NotesLayoutClient({ notes, children }: NotesLayoutClientProps) {
  return (
    <div className="fixed inset-0 top-16 flex bg-background z-10">
      {/* Left Sidebar - Hidden on mobile, visible on desktop */}
      <NotesSidebar notes={notes} />

      {/* Main Content Area - Hidden Scrollbar */}
      <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden bg-background [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain">
        {children}
      </div>
    </div>
  );
}
