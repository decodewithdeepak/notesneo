import { useState } from 'react';
import { Book, GraduationCap, ScrollText } from 'lucide-react';
import { NoteCard } from '../components/NoteCard';
import { FilterBar } from '../components/FilterBar';
import { useFavorites } from '../context/FavoritesContext';
import { notes } from '../data/notesData';
import type { Note } from '../types';

export function Notes() {
  const [searchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState('');
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleSave = (note: Note) => {
    if (isFavorite(note.id)) {
      removeFromFavorites(note.id);
    } else {
      addToFavorites(note);
    }
  };

  // Filter notes based on all criteria
  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = !selectedBranch || note.branch === selectedBranch;
    const matchesSemester = !selectedSemester || note.semester === selectedSemester;
    const matchesSubject = !selectedSubject || note.subject === selectedSubject;
    return matchesSearch && matchesBranch && matchesSemester && matchesSubject;
  });

  // Get unique subjects for the selected semester
  const availableSubjects = Array.from(
    new Set(
      notes
        .filter((note) => (!selectedBranch || note.branch === selectedBranch) &&
          (!selectedSemester || note.semester === selectedSemester))
        .map((note) => note.subject)
    )
  );

  // Show hero section when no subject is selected
  const showHeroSection = !selectedSubject;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8" data-aos="fade-down">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Academic Notes
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Browse our collection of high-quality academic notes
          </p>
        </div>

        <div className="space-y-6" data-aos="fade-up">
          <FilterBar
            selectedBranch={selectedBranch}
            selectedSemester={selectedSemester}
            selectedSubject={selectedSubject}
            onBranchChange={setSelectedBranch}
            onSemesterChange={setSelectedSemester}
            onSubjectChange={setSelectedSubject}
            subjects={availableSubjects}
          />
        </div>

        {showHeroSection ? (
          <div className="mt-12">
            {/* Course Selection Guide */}
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Select Your Course
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Choose your branch, semester, and subject to access your study materials
              </p>
            </div>

            {/* Course Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
                  <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Multiple Branches
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Access notes for BTech, BCA, and BBA courses
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
                  <Book className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Comprehensive Content
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Detailed notes for all subjects and units
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4 mx-auto">
                  <ScrollText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  Easy Navigation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Filter by semester and subject for quick access
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                How to Access Notes
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Select your branch (BTech, BCA, or BBA)</li>
                <li>Choose your semester (1-8)</li>
                <li>Pick a subject to view available notes</li>
                <li>Download the notes you need</li>
              </ol>
            </div>
          </div>
        ) : (
          filteredNotes.length === 0 ? (
            <div className="text-center py-12" data-aos="fade-up">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No notes found matching your criteria. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {filteredNotes.map((note, index) => (
                <div key={note.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <NoteCard
                    note={note}
                    onSave={() => handleSave(note)}
                    isSaved={isFavorite(note.id)}
                  />
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}