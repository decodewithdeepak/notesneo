import { getAllNotes } from "@/lib/notes";
import { NotesClient } from "./notes-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Notes - NotesNeo",
  description:
    "Browse all course notes by semester and subject. Find study materials for BTech, BCA, and BBA students.",
  keywords: [
    "notes",
    "study materials",
    "BTech notes",
    "BCA notes",
    "semester notes",
    "course notes",
  ],
};

export default async function NotesPage() {
  const allNotes = await getAllNotes();

  return (
    <div className="max-w-6xl mx-auto">
      <NotesClient notes={allNotes} />
    </div>
  );
}
