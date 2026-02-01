/**
 * Slug utility functions for converting between file paths and URL slugs
 * Format: {semester}th-sem-{subject}-{filename}
 * Example: "6th-sem/adbms/unit-1.md" <-> "6th-sem-adbms-unit-1"
 */

const GITHUB_REPO = "decodewithdeepak/notesneo-content";
const GITHUB_BRANCH = "main";

/**
 * Convert file path to URL slug
 * @example "6th-sem/adbms/unit-1.md" → "6th-sem-adbms-unit-1"
 */
export function filePathToSlug(filePath: string): string {
  return filePath.replace(/\.md$/, "").replace(/[/\\]/g, "-");
}

/**
 * Convert URL slug back to file path
 * @example "6th-sem-adbms-unit-1" → "6th-sem/adbms/unit-1.md"
 * @example "6th-sem-adv-java-unit-1" → "6th-sem/adv-java/unit-1.md"
 */
export function slugToFilePath(slug: string): string {
  const parts = slug.split("-");
  if (parts.length < 4) throw new Error(`Invalid slug: ${slug}`);

  // First two parts are always semester (e.g., "6th", "sem")
  const semester = `${parts[0]}-${parts[1]}`;

  // Find where the filename starts (unit-X, pyq, syllabus)
  // Filenames always start with: unit, pyq, or syllabus
  let filenameStartIndex = -1;
  for (let i = 2; i < parts.length; i++) {
    if (parts[i] === "unit" || parts[i] === "pyq" || parts[i] === "syllabus") {
      filenameStartIndex = i;
      break;
    }
  }

  if (filenameStartIndex === -1) {
    throw new Error(`Invalid slug format: ${slug} - no valid filename found`);
  }

  // Subject is everything between semester and filename
  const subject = parts.slice(2, filenameStartIndex).join("-");

  // Filename is everything from the filename start
  const filename = parts.slice(filenameStartIndex).join("-");

  return `${semester}/${subject}/${filename}.md`;
}

/**
 * Generate GitHub edit URL for a note
 * @example getGitHubEditUrl("6th-sem-adbms-unit-1")
 */
export function getGitHubEditUrl(slug: string): string {
  const filePath = slugToFilePath(slug);
  return `https://github.com/${GITHUB_REPO}/blob/${GITHUB_BRANCH}/${filePath}`;
}

/**
 * Generate GitHub raw content URL for a note
 * @example getGitHubRawUrl("6th-sem-adbms-unit-1")
 */
export function getGitHubRawUrl(slug: string): string {
  const filePath = slugToFilePath(slug);
  return `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${filePath}`;
}
