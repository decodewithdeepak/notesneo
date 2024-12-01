import { Download } from 'lucide-react';
import type { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onSave?: () => void;
  isSaved?: boolean;
}

export function NoteCard({ note, onSave, isSaved }: NoteCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-[1.05] hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 duration-300 ease-in-out">
      <img
        src={note.imageUrl}
        alt={note.title}
        className="w-full h-100 object-cover rounded-t-xl"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {note.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {note.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {note.branch}
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
            {note.subject}
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
            Semester {note.semester}
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
            Unit {note.unit}
          </span>
        </div>
        <div className="mt-6 flex justify-between items-center">
          {onSave && (
            <button
              onClick={onSave}
              className={`p-2 rounded-full ${
                isSaved
                  ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
              } hover:bg-pink-200 dark:hover:bg-pink-700 transition-colors duration-200 shadow-md hover:shadow-lg`}
            >
              <svg
                className="w-5 h-5"
                fill={isSaved ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          )}
          <a
            href={note.downloadUrl}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
            // download
            target="_blank" // open in new tab
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}
