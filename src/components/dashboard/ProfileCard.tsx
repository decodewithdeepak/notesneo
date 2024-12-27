import { User } from 'firebase/auth';
import { Mail, User as UserIcon } from 'lucide-react';

interface ProfileCardProps {
  user: User;
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center">
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'User'}
            className="w-24 h-24 rounded-full mb-4"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
            <UserIcon className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {user.displayName || 'Student'}
        </h3>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
          <Mail className="w-4 h-4 mr-2" />
          <span>{user.email}</span>
        </div>
        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
}