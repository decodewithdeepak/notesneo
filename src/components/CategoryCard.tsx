import type { BlogCategory } from '../types';

interface CategoryCardProps {
  category: BlogCategory;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryCard({ category, isSelected, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-xl transition-all ${
        isSelected
          ? 'bg-indigo-600 text-white transform scale-105 shadow-lg'
          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700'
      }`}
    >
      <div className="text-4xl mb-3">{category.icon}</div>
      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
      <p className={`text-sm ${isSelected ? 'text-indigo-100' : 'text-gray-600 dark:text-gray-300'}`}>
        {category.description}
      </p>
    </button>
  );
}