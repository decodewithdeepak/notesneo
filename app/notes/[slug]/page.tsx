import { notFound } from "next/navigation";
import { getAllNoteSlugs, getNoteBySlug } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { NoteContent } from "@/components/notes/note-content";
import { ReadingProgress } from "@/components/notes/reading-progress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    return { title: "Note Not Found" };
  }

  return {
    title: note.title,
    description: `${note.subject} - ${note.title}`,
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <>
      {/* Note Header */}
      <header className="py-5 px-4 sm:px-8 bg-background border-b border-border lg:mr-80">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Badge variant="secondary" className="text-xs sm:text-sm">{note.subject}</Badge>
          <Badge variant="secondary" className="text-xs sm:text-sm">Semester {note.semester}</Badge>
        </div>
        <h1 className="font-librebaskerville text-xl sm:text-2xl lg:text-3xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {note.title}
        </h1>
      </header>

      {/* Reading Progress - Sticky below header */}
      <div className="sticky top-0 left-0 right-0 z-30 lg:mr-80">
        <ReadingProgress />
      </div>

      {/* Note Content with Outline */}
      <NoteContent content={note.content} />
    </>
  );
}
