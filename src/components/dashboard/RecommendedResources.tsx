import { notes } from '../../data/notesData';
import { NoteCard } from '../NoteCard';

export function RecommendedResources() {
  // For demo purposes, just show first 4 notes as recommendations
  const recommendedNotes = notes.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Recommended for You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendedNotes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            isSaved={false}
            onSave={() => {/* Handle save */}}
          />
        ))}
      </div>
    </div>
  );
}