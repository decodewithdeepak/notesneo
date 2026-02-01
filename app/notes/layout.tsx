import { getAllNotes } from "@/lib/notes";
import { NotesLayoutClient } from "@/app/notes/notes-layout-client";

export default async function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allNotes = await getAllNotes();

  return <NotesLayoutClient notes={allNotes}>{children}</NotesLayoutClient>;
}
