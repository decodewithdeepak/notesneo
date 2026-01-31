import { getAllNotes } from "@/lib/notes";
import { NotesLayoutClient } from "@/app/notes/notes-layout-client";
import Footer from "@/components/layout/footer";

export default async function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allNotes = await getAllNotes();

  return (
    <NotesLayoutClient notes={allNotes}>
      {children}
      <div className="lg:mr-80">
        <Footer />
      </div>
    </NotesLayoutClient>
  );
}
