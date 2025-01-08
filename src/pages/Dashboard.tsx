import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ProfileCard } from '../components/dashboard/ProfileCard';
import { SavedNotes } from '../components/dashboard/SavedNotes';
import { SubjectNotes } from '../components/dashboard/SubjectNotes';
import { ProfileSetupModal } from '../components/ProfileSetupModal';
import { notes } from '../data/notesData';
import type { Note } from '../types';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, userProfile, updateUserProfile } = useAuth();
  const { favorites } = useFavorites();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [userNotes, setUserNotes] = useState<{ [key: string]: Note[] }>({});

  useEffect(() => {
    if (user && !userProfile) {
      setShowProfileModal(true);
    }
  }, [user, userProfile]);

  useEffect(() => {
    if (userProfile) {
      const filteredNotes = notes.filter(
        note =>
          note.branch === userProfile.branch &&
          note.semester === userProfile.semester
      );

      const groupedNotes = filteredNotes.reduce((acc, note) => {
        if (!acc[note.subject]) {
          acc[note.subject] = [];
        }
        acc[note.subject].push(note);
        return acc;
      }, {} as { [key: string]: Note[] });

      setUserNotes(groupedNotes);
    }
  }, [userProfile]);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleProfileUpdate = async (data: { branch: string; semester: number }) => {
    await updateUserProfile(data);
    setShowProfileModal(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
      <ProfileSetupModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        initialData={userProfile || undefined}
        onSubmit={handleProfileUpdate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardHeader user={user} />

        <div className="mt-8 space-y-8">
          {/* Profile Card */}
          <div className="w-full">
            <ProfileCard
              user={user}
              userProfile={userProfile}
              onEditProfile={() => setShowProfileModal(true)}
            />
          </div>

          {/* Favorites Section */}
          <div className="w-full">
            <SavedNotes
              favorites={favorites}
              searchQuery={''}
              onSearchChange={() => {}}
            />
          </div>

          {/* Subject-wise Notes */}
          <div className="space-y-8">
            {Object.entries(userNotes).map(([subject, subjectNotes]) => (
              <SubjectNotes key={subject} subject={subject} notes={subjectNotes} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
