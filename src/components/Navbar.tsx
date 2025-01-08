import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onLoginClick: () => void;
}

export function Navbar({ onLoginClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();
  const { user } = useAuth();

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => 
    location.pathname === path ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : '';

  return (
    <nav className="fixed w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/20 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-800 dark:group-hover:text-indigo-500 transition-all">
                NotesNeo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`nav-link ${isActive('/')} hover:underline transition-all duration-200`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')} hover:underline transition-all duration-200`}>
              About
            </Link>
            <Link to="/notes" className={`nav-link ${isActive('/notes')} hover:underline transition-all duration-200`}>
              Notes
            </Link>
            <Link to="/resources" className={`nav-link ${isActive('/resources')} hover:underline transition-all duration-200`}>
              Resources
            </Link>
            <Link to="/blog" className={`nav-link ${isActive('/blog')} hover:underline transition-all duration-200`}>
              Blog
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')} hover:underline transition-all duration-200`}>
              Contact
            </Link>
            <Link
              to="/favorites"
              className={`nav-link flex items-center gap-1 ${isActive('/favorites')} hover:underline transition-all duration-200`}
            >
              <Heart className="w-4 h-4" />
              <span>Favorites</span>
              {favorites.length > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                  {favorites.length}
                </span>
              )}
            </Link>
            <ThemeToggle />
            {user ? (
              <UserMenu />
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              to="/favorites"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative"
            >
              <Heart className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-600 text-white">
                  {favorites.length}
                </span>
              )}
            </Link>
            <ThemeToggle />
            {user && <UserMenu />}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-6 space-y-4">
          <div className="space-y-3">
            <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about')}`} onClick={closeMenu}>
              About
            </Link>
            <Link to="/notes" className={`mobile-nav-link ${isActive('/notes')}`} onClick={closeMenu}>
              Notes
            </Link>
            <Link to="/resources" className={`mobile-nav-link ${isActive('/resources')}`} onClick={closeMenu}>
              Resources
            </Link>
            <Link to="/blog" className={`mobile-nav-link ${isActive('/blog')}`} onClick={closeMenu}>
              Blog
            </Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact')}`} onClick={closeMenu}>
              Contact
            </Link>
            {!user && (
              <button
                onClick={() => {
                  onLoginClick();
                  closeMenu();
                }}
                className="w-full text-left mobile-nav-link bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
