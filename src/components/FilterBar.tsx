import { Filter } from 'lucide-react';
import { useMemo } from 'react';

interface FilterBarProps {
  selectedBranch: string;
  selectedSemester: number | null;
  selectedSubject: string;
  onBranchChange: (branch: string) => void;
  onSemesterChange: (semester: number | null) => void;
  onSubjectChange: (subject: string) => void;
  subjects: string[];
}

export function FilterBar({
  selectedBranch,
  selectedSemester,
  selectedSubject,
  onBranchChange,
  onSemesterChange,
  onSubjectChange,
  subjects,
}: FilterBarProps) {
  // Memoize static data (branches and semesters)
  const branches = useMemo(() => ['BTech', 'BCA', 'BBA'], []);
  const semesters = useMemo(() => Array.from({ length: 8 }, (_, i) => i + 1), []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Branch Selector */}
        <div className="flex items-center gap-2 flex-1">
          <label htmlFor="branch" className="sr-only">Branch</label>
          <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <select
            id="branch"
            value={selectedBranch}
            onChange={(e) => onBranchChange(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select the Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        {/* Semester Selector */}
        <div className="flex-1">
          <label htmlFor="semester" className="sr-only">Semester</label>
          <select
            id="semester"
            value={selectedSemester || ''}
            onChange={(e) => onSemesterChange(e.target.value ? Number(e.target.value) : null)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select the Semester</option>
            {semesters.map((semester) => (
              <option key={semester} value={semester}>
                Semester {semester}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Selector */}
        <div className="flex-1">
          <label htmlFor="subject" className="sr-only">Subject</label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={(e) => onSubjectChange(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select the Subject</option>
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))
            ) : (
              <option value="" disabled>No subjects available</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
