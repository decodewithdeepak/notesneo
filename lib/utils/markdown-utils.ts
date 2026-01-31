import React from "react";

/**
 * Heading interface for markdown content
 */
export interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Clean markdown text by removing formatting characters
 * Handles strings, React elements, and arrays recursively
 */
export const cleanText = (text: string | React.ReactNode): string => {
  if (typeof text === 'string') {
    return text
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/`/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .trim();
  }
  
  // Handle React children (arrays, objects, etc.)
  if (Array.isArray(text)) {
    return text.map(child => cleanText(child)).join('');
  }
  
  // Handle React elements
  if (React.isValidElement(text)) {
    return cleanText((text.props as { children?: React.ReactNode }).children);
  }
  
  // Fallback for other types
  return String(text);
};

/**
 * Generate a URL-safe ID from text
 * @param text - The text to convert to an ID
 * @param count - Optional counter for duplicate headings
 */
export const generateId = (text: string, count = 0): string => {
  const base = `heading-${text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").substring(0, 50)}`;
  return count > 0 ? `${base}-${count}` : base;
};

/**
 * Extract all headings (h2-h4) from markdown content
 * @param content - Raw markdown content
 * @returns Array of heading objects with id, text, and level
 */
export const extractHeadings = (content: string): Heading[] => {
  const extracted: Heading[] = [];
  const idCounts = new Map<string, number>();

  content.split("\n").forEach((line) => {
    const match = line.trim().match(/^(#{2,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = cleanText(match[2]);
      const baseId = generateId(text);
      const count = idCounts.get(baseId) || 0;
      idCounts.set(baseId, count + 1);
      extracted.push({ id: generateId(text, count), text, level });
    }
  });

  return extracted;
};
