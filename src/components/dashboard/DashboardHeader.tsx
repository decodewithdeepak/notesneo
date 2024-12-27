import { User } from 'firebase/auth';
import { LucideIcon } from 'lucide-react';

interface DashboardHeaderProps {
  user: User;
  stats: {
    name: string;
    value: number;
    icon: LucideIcon;
    color: string;
    bgColor: string;
  }[];
}

export function DashboardHeader({ user, stats }: DashboardHeaderProps) {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user.displayName || 'Student'}!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 italic">
          "{randomQuote}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}