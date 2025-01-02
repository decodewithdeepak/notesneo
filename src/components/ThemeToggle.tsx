import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <span
          className={`absolute inset-0 transform transition-transform duration-500 rotate-0 dark:-rotate-90 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </span>
        <span
          className={`absolute inset-0 transform transition-transform duration-500 rotate-90 dark:rotate-0 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Moon className="w-5 h-5 text-blue-500" />
        </span>
      </div>
    </button>
  );
}