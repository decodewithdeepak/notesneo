import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useFavorites } from '../context/FavoritesContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { favorites } = useFavorites();

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : '';

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-800 dark:group-hover:text-indigo-500 transition-all">
                NotesNeo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/notes" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base ${isActive('/notes')}`}>
              Notes
            </Link>
            <Link to="/contact" className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link 
              to="/favorites" 
              className={`nav-link font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-base flex items-center gap-1 ${isActive('/favorites')}`}
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
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-base"
            >
              Login
            </Link>
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
            <Link to="/" className={`mobile-nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={`mobile-nav-link ${isActive('/about')}`} onClick={closeMenu}>About</Link>
            <Link to="/notes" className={`mobile-nav-link ${isActive('/notes')}`} onClick={closeMenu}>Notes</Link>
            <Link to="/contact" className={`mobile-nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
            <Link to="/login" className="mobile-nav-link bg-indigo-600 text-white" onClick={closeMenu}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}