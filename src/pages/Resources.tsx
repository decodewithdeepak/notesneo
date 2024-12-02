import { useState } from 'react';
import { Book, FileText, Play, PenTool, Search } from 'lucide-react';
import { ResourceCard } from '../components/ResourceCard';
import { resources } from '../data/resourceData';
import type { Resource } from '../types';

export function Resources() {
  const [selectedType, setSelectedType] = useState<Resource['type'] | ''>('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const resourceTypes = [
    { type: 'paper', label: 'Previous Papers', icon: FileText },
    { type: 'video', label: 'Video Lectures', icon: Play },
    { type: 'practice', label: 'Practice Problems', icon: PenTool },
    { type: 'book', label: 'Reference Books', icon: Book },
  ];

  const branches = ['BTech', 'BCA', 'BBA'];
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  const filteredResources = resources.filter((resource) => {
    const matchesType = !selectedType || resource.type === selectedType;
    const matchesBranch = !selectedBranch || resource.branch === selectedBranch;
    const matchesSemester = !selectedSemester || resource.semester === selectedSemester;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesBranch && matchesSemester && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resource Library
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Access study materials, previous papers, and more
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8" data-aos="fade-up">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" data-aos="fade-up">
          {/* Branch Filter */}
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">All Branches</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>

          {/* Semester Filter */}
          <select
            value={selectedSemester || ''}
            onChange={(e) => setSelectedSemester(e.target.value ? Number(e.target.value) : null)}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">All Semesters</option>
            {semesters.map((semester) => (
              <option key={semester} value={semester}>Semester {semester}</option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as Resource['type'] | '')}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="">All Types</option>
            {resourceTypes.map(({ type, label }) => (
              <option key={type} value={type}>{label}</option>
            ))}
          </select>
        </div>

        {/* Resource Type Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {resourceTypes.map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              onClick={() => setSelectedType(type === selectedType ? '' : type as Resource['type'])}
              className={`p-4 rounded-xl transition-all ${
                type === selectedType
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${
                type === selectedType ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'
              }`} />
              <span className="text-sm font-medium block text-center">{label}</span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No resources found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} data-aos="fade-up">
                <ResourceCard resource={resource} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}