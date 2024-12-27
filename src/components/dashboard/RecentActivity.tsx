import { formatDistanceToNow } from 'date-fns';
import { BookOpen, Download, Heart } from 'lucide-react';
import type { Activity } from '../../types';

interface RecentActivityProps {
  activities: Activity[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'view':
        return <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'download':
        return <Download className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'favorite':
        return <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />;
    }
  };

  const getActivityText = (type: Activity['type']) => {
    switch (type) {
      case 'view':
        return 'viewed';
      case 'download':
        return 'downloaded';
      case 'favorite':
        return 'favorited';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No recent activity to show.
          </p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  You {getActivityText(activity.type)}{' '}
                  <span className="font-semibold">{activity.noteTitle}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}