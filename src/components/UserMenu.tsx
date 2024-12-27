import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function UserMenu() {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'User'}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <UserIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <button
            onClick={() => {
              signOut();
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="flex items-center space-x-2">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}