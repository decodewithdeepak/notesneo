import { NoteCard } from '../NoteCard';
import { useFavorites } from '../../context/FavoritesContext';
import type { Note } from '../../types';

interface SubjectNotesProps {
  subject: string;
  notes: Note[];
}

export function SubjectNotes({ subject, notes }: SubjectNotesProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleSave = (note: Note) => {
    if (isFavorite(note.id)) {
      removeFromFavorites(note.id);
    } else {
      addToFavorites(note);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {subject}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onSave={() => handleSave(note)}
            isSaved={isFavorite(note.id)}
          />
        ))}
      </div>
    </div>
  );
}