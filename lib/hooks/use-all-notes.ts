import { useState, useEffect } from "react";
import type { Note } from "@/lib/types/note";

interface UseAllNotesReturn {
  notes: Note[];
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook to fetch all notes (PDF + Markdown) from API
 * Use this in client components that need all notes
 */
export function useAllNotes(): UseAllNotesReturn {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/notes');
        
        if (!res.ok) {
          throw new Error(`Failed to fetch notes: ${res.status}`);
        }
        
        const data = await res.json();
        
        if (isMounted) {
          setNotes(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
          setNotes([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchNotes();

    return () => {
      isMounted = false;
    };
  }, []);

  return { notes, isLoading, error };
}
