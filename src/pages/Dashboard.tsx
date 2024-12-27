import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Download, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { ProfileCard } from '../components/dashboard/ProfileCard';
import { SavedNotes } from '../components/dashboard/SavedNotes';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { RecommendedResources } from '../components/dashboard/RecommendedResources';
import type { Activity } from '../types';

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { favorites } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'view',
      noteId: 'py1',
      noteTitle: 'Python Unit 1',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: '2',
      type: 'download',
      noteId: 'dbms301',
      noteTitle: 'DBMS Unit 1',
      timestamp: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: '3',
      type: 'favorite',
      noteId: 'dsa301',
      noteTitle: 'DSA Unit 1',
      timestamp: new Date(Date.now() - 10800000).toISOString(),
    },
  ]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const stats = [
    {
      name: 'Saved Notes',
      value: favorites.length,
      icon: Heart,
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-100 dark:bg-pink-900',
    },
    {
      name: 'Recent Views',
      value: recentActivities.filter(a => a.type === 'view').length,
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      name: 'Downloads',
      value: recentActivities.filter(a => a.type === 'download').length,
      icon: Download,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      name: 'Active Days',
      value: 7,
      icon: Clock,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DashboardHeader user={user} stats={stats} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <SavedNotes 
              favorites={favorites}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <RecommendedResources />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <ProfileCard user={user} />
            <RecentActivity activities={recentActivities} />
          </div>
        </div>
      </div>
    </div>
  );
}