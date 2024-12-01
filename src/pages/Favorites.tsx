import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { NoteCard } from '../components/NoteCard';

export function Favorites() {
  const { favorites, removeFromFavorites, isFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8" data-aos="fade-down">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Your Favorite Notes
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Access your saved academic notes in one place
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-6">
              <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              No favorites yet
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start exploring our collection of notes and save your favorites for quick access.
            </p>
            <Link
            to="/notes"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-6"
          >
            Browse Notes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {favorites.map((note, index) => (
              <div key={note.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <NoteCard
                  note={note}
                  onSave={() => removeFromFavorites(note.id)}
                  isSaved={isFavorite(note.id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}