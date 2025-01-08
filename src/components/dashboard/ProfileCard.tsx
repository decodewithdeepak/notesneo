import { User } from 'firebase/auth';
import { Mail, User as UserIcon, GraduationCap, BookOpen } from 'lucide-react';
import type { UserProfile } from '../../types';

interface ProfileCardProps {
  user: User;
  userProfile: UserProfile | null;
  onEditProfile: () => void;
}

export function ProfileCard({ user, userProfile, onEditProfile }: ProfileCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-center text-center">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full ring-4 ring-white dark:ring-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-700 mb-4">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User'}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <UserIcon className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>

          {/* User Info */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {user.displayName || 'Student'}
          </h3>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-400 mt-1">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm">{user.email}</span>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {userProfile && (
            <div className="space-y-3">
              {/* Branch Info */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>Branch</span>
                </div>
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  {userProfile.branch}
                </span>
              </div>
              {/* Semester Info */}
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <BookOpen className="w-5 h-5 mr-2" />
                  <span>Semester</span>
                </div>
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  {userProfile.semester}
                </span>
              </div>
            </div>
          )}

          {/* Edit Profile Button */}
          <button
            onClick={onEditProfile}
            className="w-full bg-indigo-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
