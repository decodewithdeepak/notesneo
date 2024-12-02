import { Download, Play, Book, FileText } from 'lucide-react';
import type { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getIcon = () => {
    switch (resource.type) {
      case 'paper':
        return <FileText className="w-5 h-5" />;
      case 'video':
        return <Play className="w-5 h-5" />;
      case 'practice':
        return <Download className="w-5 h-5" />;
      case 'book':
        return <Book className="w-5 h-5" />;
    }
  };

  const getActionButton = () => {
    switch (resource.type) {
      case 'paper':
      case 'practice':
        return (
          <a
            href={resource.downloadUrl}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </a>
        );
      case 'video':
        return (
          <a
            href={resource.videoUrl}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full hover:bg-red-200 dark:hover:bg-red-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play className="w-4 h-4" />
            <span>Watch</span>
          </a>
        );
      case 'book':
        return (
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
            <Book className="w-4 h-4" />
            <span>View Details</span>
          </button>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
      <img
        src={resource.imageUrl}
        alt={resource.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
            {getIcon()}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {resource.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {resource.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
            {resource.branch}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
            {resource.subject}
          </span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
            Semester {resource.semester}
          </span>
          {resource.year && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300">
              {resource.year}
            </span>
          )}
        </div>

        <div className="flex justify-end">
          {getActionButton()}
        </div>
      </div>
    </div>
  );
}