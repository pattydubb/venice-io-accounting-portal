import Link from 'next/link';
import { 
  Bars3Icon, 
  HomeIcon, 
  CogIcon,
  UserIcon,
  ChartBarIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';
import { useState } from 'react';

// This is a client component wrapper for the sidebar
'use client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        aria-hidden="true"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex max-w-xs w-full bg-white">
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center justify-between px-4">
                <Link href="/dashboard" className="text-2xl font-bold text-venice-blue">
                  Venice.io
                </Link>
                <button
                  type="button"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                <Link
                  href="/dashboard"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-venice-blue bg-venice-light"
                >
                  <HomeIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  Applications
                </Link>
                <Link
                  href="/dashboard/analytics"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <ChartBarIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  Analytics
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <UserIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  Profile
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <CogIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-center px-4">
              <Link href="/dashboard" className="text-2xl font-bold text-venice-blue">
                Venice.io
              </Link>
            </div>
            <nav className="mt-8 flex-1 px-4 space-y-1">
              <Link
                href="/dashboard"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-venice-blue bg-venice-light"
              >
                <HomeIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Applications
              </Link>
              <Link
                href="/dashboard/analytics"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <ChartBarIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Analytics
              </Link>
              <Link
                href="/dashboard/profile"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <UserIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Profile
              </Link>
              <Link
                href="/dashboard/settings"
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <CogIcon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">User Name</p>
                  <p className="text-xs font-medium text-gray-500">View profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64">
        <div className="max-w-7xl mx-auto flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 pb-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
