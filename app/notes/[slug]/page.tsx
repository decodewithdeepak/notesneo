import { notFound } from "next/navigation";
import { getAllNoteSlugs, getNoteBySlug } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NoteContent } from "@/components/notes/note-content";
import { ReadingProgress } from "@/components/notes/reading-progress";
import { Download, User, Calendar } from "lucide-react";

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
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs sm:text-sm">{note.subject}</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm">Semester {note.semester}</Badge>
          </div>
          {note.pdfUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={note.pdfUrl} download>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          )}
        </div>
        <h1 className="font-librebaskerville text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
          {note.title}
        </h1>
        {(note.description || note.author || note.date) && (
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            {note.description && <p>{note.description}</p>}
            {(note.author || note.date) && (
              <div className="flex flex-wrap items-center gap-4">
                {note.author && (
                  <div className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    <span>Author: {note.author}</span>
                  </div>
                )}
                {note.date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Last Updated: {note.date}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
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
