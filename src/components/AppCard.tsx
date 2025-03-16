import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export type Application = {
  id: string;
  name: string;
  description: string;
  url: string;
  status: 'Active' | 'Coming Soon' | 'Maintenance';
  category?: string;
  icon?: string;
};

interface AppCardProps {
  app: Application;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <div className={`app-card ${
      app.status === 'Coming Soon' ? 'app-card-coming-soon' : ''
    } ${app.status === 'Maintenance' ? 'app-card-maintenance' : ''}`}>
      <div className="rounded-full bg-venice-blue/10 p-2 text-venice-blue w-fit">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" 
          />
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{app.name}</h3>
      <p className="mt-2 text-sm text-gray-500 flex-grow">{app.description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
          ${app.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
          ${app.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' : ''}
          ${app.status === 'Maintenance' ? 'bg-red-100 text-red-800' : ''}
        `}>
          {app.status}
        </span>
        {app.status === 'Active' ? (
          <Link
            href={app.url}
            target="_blank"
            className="text-venice-blue hover:text-venice-teal inline-flex items-center text-sm font-medium"
          >
            Open <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        ) : (
          <span className="text-gray-400 text-sm">
            {app.status === 'Coming Soon' ? 'Coming Soon' : 'Under Maintenance'}
          </span>
        )}
      </div>
    </div>
  );
}
