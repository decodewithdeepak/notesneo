import { Search } from 'lucide-react';
import { NoteCard } from '../NoteCard';
import type { Note } from '../../types';

interface SavedNotesProps {
  favorites: Note[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function SavedNotes({ favorites, searchQuery, onSearchChange }: SavedNotesProps) {
  const filteredNotes = favorites.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Saved Notes
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search saved notes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400 py-8">
          No saved notes found. Start exploring and save notes for quick access!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              isSaved={true}
              onSave={() => {/* Handle unsave */}}
            />
          ))}
        </div>
      )}
    </div>
  );
}