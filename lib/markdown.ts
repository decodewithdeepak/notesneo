import type { Note } from "./types/note";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { filePathToSlug } from "./utils/slug";

export interface MarkdownNote {
  slug: string;
  title: string;
  subject: string;
  semester: number;
  unit: number | string;
  content: string;
  pdfUrl?: string;
  author?: string;
  description?: string;
  date?: string;
}

function parseNote(
  filePath: string,
  content: string,
  subject: string,
  semester: number,
): MarkdownNote {
  const slug = filePathToSlug(filePath);
  const filename = path.basename(filePath, ".md");
  const { data: frontmatter, content: markdownContent } = matter(content);

  const headingMatch = markdownContent.match(/^#\s+(.+)$/m);
  const title =
    frontmatter.title || (headingMatch ? headingMatch[1] : filename);

  const unitFromFrontmatter = frontmatter.unit;
  const unitMatch =
    filename.match(/unit[- _]?(\d+)/i) || title.match(/unit[- _]?(\d+)/i);
  const isPYQ =
    /pyq|previous\s*year/i.test(filename) || /pyq|previous\s*year/i.test(title);
  const isSyllabus = /syllabus/i.test(filename) || /syllabus/i.test(title);
  const unit: number | string =
    unitFromFrontmatter ||
    (isPYQ
      ? "PYQ"
      : isSyllabus
        ? "SYLLABUS"
        : unitMatch
          ? parseInt(unitMatch[1])
          : 1);

  return {
    slug,
    title,
    subject: frontmatter.subject?.toUpperCase() || subject.toUpperCase(),
    semester: frontmatter.semester || semester,
    unit,
    content: markdownContent,
    pdfUrl: frontmatter.pdfUrl,
    author: frontmatter.author,
    description: frontmatter.description,
    date: frontmatter.date,
  };
}

export async function getAllNotes(): Promise<MarkdownNote[]> {
  const allNotes: MarkdownNote[] = [];
  const contentDir = path.join(process.cwd(), "notes-content");

  if (!fs.existsSync(contentDir)) {
    console.error(
      "⚠️  notes-content/ directory not found. Run: git submodule update --init --recursive"
    );
    return [];
  }

  const semesterDirs = fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && /^\d+th-sem$/.test(d.name))
    .map((d) => ({
      name: d.name,
      semester: parseInt(d.name.match(/^(\d+)th-sem$/)?.[1] || "0"),
    }))
    .filter((s) => s.semester > 0)
    .sort((a, b) => a.semester - b.semester);

  for (const { name: semDir, semester: sem } of semesterDirs) {
    const semPath = path.join(contentDir, semDir);

    const subjects = fs
      .readdirSync(semPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    for (const subject of subjects) {
      const subjectPath = path.join(semPath, subject);
      const files = fs
        .readdirSync(subjectPath)
        .filter((f) => f.endsWith(".md"));

      for (const file of files) {
        const filePath = path.join(subjectPath, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const relativePath = `${semDir}/${subject}/${file}`;
        const note = parseNote(relativePath, content, subject, sem);
        allNotes.push(note);
      }
    }
  }

  return allNotes.sort((a, b) => {
    if (a.semester !== b.semester) return a.semester - b.semester;
    if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
    return a.slug.localeCompare(b.slug);
  });
}

export async function getNoteBySlug(
  slug: string,
): Promise<MarkdownNote | null> {
  const notes = await getAllNotes();
  return notes.find((n) => n.slug === slug) || null;
}

export async function getAllNoteSlugs(): Promise<string[]> {
  const notes = await getAllNotes();
  return notes.map((n) => n.slug);
}

export async function getMarkdownNotes(): Promise<Note[]> {
  const notes = await getAllNotes();
  return notes.map((note) => ({
    id: note.slug,
    title: note.title,
    description:
      note.description || `${note.subject} notes for Semester ${note.semester}`,
    subject: note.subject,
    branch: "BTech" as const,
    semester: note.semester,
    unit: note.unit,
    viewUrl: `/notes/${note.slug}`,
  }));
}
