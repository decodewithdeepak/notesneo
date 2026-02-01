import { ACTIVE_SEMESTERS } from "./constants";
import type { Note } from "./types/note";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

// Parse note from content with frontmatter support
function parseNote(filePath: string, content: string, subject: string, semester: number): MarkdownNote {
  const slug = filePath.replace(/\.md$/, "").replace(/\//g, "-").replace(/\\/g, "-");
  const filename = path.basename(filePath, ".md");
  
  // Parse frontmatter
  const { data: frontmatter, content: markdownContent } = matter(content);
  
  // Title: frontmatter > first heading > filename
  const headingMatch = markdownContent.match(/^#\s+(.+)$/m);
  const title = frontmatter.title || (headingMatch ? headingMatch[1] : filename);

  // Extract unit from frontmatter > filename > title
  const unitFromFrontmatter = frontmatter.unit;
  const unitMatch = filename.match(/unit[- _]?(\d+)/i) || title.match(/unit[- _]?(\d+)/i);
  const isPYQ = /pyq|previous\s*year/i.test(filename) || /pyq|previous\s*year/i.test(title);
  const isSyllabus = /syllabus/i.test(filename) || /syllabus/i.test(title);
  const unit: number | string = unitFromFrontmatter || (isPYQ ? "PYQ" : isSyllabus ? "SYLLABUS" : unitMatch ? parseInt(unitMatch[1]) : 1);

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

// Fetch from local filesystem
export async function getAllNotes(): Promise<MarkdownNote[]> {
  const allNotes: MarkdownNote[] = [];
  const contentDir = path.join(process.cwd(), "notes-content");

  for (const sem of ACTIVE_SEMESTERS) {
    const semPath = path.join(contentDir, `${sem}th-sem`);
    
    if (!fs.existsSync(semPath)) continue;

    const subjects = fs.readdirSync(semPath, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);

    for (const subject of subjects) {
      const subjectPath = path.join(semPath, subject);
      const files = fs.readdirSync(subjectPath).filter(f => f.endsWith(".md"));

      for (const file of files) {
        const filePath = path.join(subjectPath, file);
        const content = fs.readFileSync(filePath, "utf-8");
        const relativePath = `${sem}th-sem/${subject}/${file}`;
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

export async function getNoteBySlug(slug: string): Promise<MarkdownNote | null> {
  const notes = await getAllNotes();
  return notes.find((n) => n.slug === slug) || null;
}

export async function getAllNoteSlugs(): Promise<string[]> {
  const notes = await getAllNotes();
  return notes.map((n) => n.slug);
}

// Convert markdown notes to Note format for unified notes page
export async function getMarkdownNotes(): Promise<Note[]> {
  const notes = await getAllNotes();
  return notes.map((note) => ({
    id: note.slug,
    title: note.title,
    description: `${note.subject} notes for Semester ${note.semester}`,
    subject: note.subject,
    branch: "BTech" as const,
    semester: note.semester,
    unit: note.unit,
    viewUrl: `/notes/${note.slug}`,
  }));
}

/* ========================================
 * GITHUB FETCHING (COMMENTED OUT - DONT REMOVE THIS - FOR FUTURE USE)
 * ========================================
 * Uncomment below if you want to fetch from GitHub instead of local files
 * 
 * import { CONTENT_SOURCE, GITHUB_CONFIG } from "./constants";
 * 
 * const { owner, repo, branch } = GITHUB_CONFIG;
 * const GITHUB_API = `https://api.github.com/repos/${owner}/${repo}/contents`;
 * const GITHUB_RAW = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
 * 
 * const headers = {
 *   Accept: "application/vnd.github.v3+json",
 *   ...(process.env.GITHUB_TOKEN && {
 *     Authorization: `token ${process.env.GITHUB_TOKEN}`,
 *   }),
 * };
 * 
 * interface GitHubItem {
 *   name: string;
 *   path: string;
 *   type: "file" | "dir";
 * }
 * 
 * async function getAllNotesGitHub(): Promise<MarkdownNote[]> {
 *   const allNotes: MarkdownNote[] = [];
 *   for (const sem of ACTIVE_SEMESTERS) {
 *     const semPath = `${sem}th-sem`;
 *     try {
 *       const res = await fetch(`${GITHUB_API}/${semPath}?ref=${branch}`, { headers });
 *       if (!res.ok) continue;
 *       const folders: GitHubItem[] = await res.json();
 *       const subjectFolders = folders.filter((f) => f.type === "dir");
 *       for (const folder of subjectFolders) {
 *         const filesRes = await fetch(`${GITHUB_API}/${folder.path}?ref=${branch}`, { headers });
 *         if (!filesRes.ok) continue;
 *         const files: GitHubItem[] = await filesRes.json();
 *         const mdFiles = files.filter((f) => f.type === "file" && f.name.endsWith(".md"));
 *         for (const file of mdFiles) {
 *           const contentRes = await fetch(`${GITHUB_RAW}/${file.path}`);
 *           if (!contentRes.ok) continue;
 *           const content = await contentRes.text();
 *           const note = parseNote(file.path, content, folder.name, sem);
 *           allNotes.push(note);
 *         }
 *       }
 *     } catch (error) {
 *       console.error(`Failed to fetch semester ${sem}:`, error);
 *     }
 *   }
 *   return allNotes.sort((a, b) => {
 *     if (a.semester !== b.semester) return a.semester - b.semester;
 *     if (a.subject !== b.subject) return a.subject.localeCompare(b.subject);
 *     return a.slug.localeCompare(b.slug);
 *   });
 * }
 * 
 * // Main function - switches between local and GitHub
 * export async function getAllNotes(): Promise<MarkdownNote[]> {
 *   if (CONTENT_SOURCE === "local") {
 *     return getAllNotesLocal();
 *   }
 *   return getAllNotesGitHub();
 * }
 */

