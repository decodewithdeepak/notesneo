import { notFound } from "next/navigation";
import { getAllNoteSlugs, getNoteBySlug } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NoteContent } from "@/components/notes/note-content";
import { ReadingProgress } from "@/components/notes/reading-progress";
import { Download, User, Calendar, Github } from "lucide-react";
import { getGitHubEditUrl } from "@/lib/utils/slug";

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

  // Generate GitHub edit URL using centralized utility
  const githubEditUrl = getGitHubEditUrl(slug);

  return (
    <>
      {/* Note Header */}
      <header className="py-5 px-4 sm:px-8 bg-background border-b border-border lg:mr-80">
        <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs sm:text-sm">
              {note.subject}
            </Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm">
              Semester {note.semester}
            </Badge>
          </div>
          {note.pdfUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={note.pdfUrl} download>
                <Download className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
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

      {/* Contribution Footer */}
      <footer className="py-8 px-4 sm:px-8 bg-muted/30 border-t border-border lg:mr-80 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-2">
            Found an error or want to contribute?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            This content is open-source and maintained by the community. Help us
            improve it!
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button asChild size="sm" variant="default">
              <a href={githubEditUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Edit on GitHub
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a
                href="https://github.com/decodewithdeepak/notesneo-content"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
