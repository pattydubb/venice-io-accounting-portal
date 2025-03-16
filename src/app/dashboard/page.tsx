'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/outline';

// Example application structure - this would come from Airtable in production
const exampleApp = {
  id: 'recked',
  name: 'RecKed',
  description: 'Automatic bank reconciliation tool that matches transactions',
  url: 'https://recked.venice.io',
  status: 'Active',
  category: 'Reconciliation',
};

export default function Dashboard() {
  const [showAddModal, setShowAddModal] = useState(false);
  
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Applications</h1>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-venice-blue hover:bg-blue-700"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Add Application
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example application card */}
          <div className="app-card">
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
            <h3 className="mt-4 text-lg font-medium text-gray-900">{exampleApp.name}</h3>
            <p className="mt-2 text-sm text-gray-500 flex-grow">{exampleApp.description}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {exampleApp.status}
              </span>
              <Link
                href={exampleApp.url}
                target="_blank"
                className="text-venice-blue hover:text-venice-teal inline-flex items-center text-sm font-medium"
              >
                Open <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* "Add Application" card */}
          <div className="app-card border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50" onClick={() => setShowAddModal(true)}>
            <div className="rounded-full bg-gray-100 p-4">
              <PlusIcon className="h-8 w-8 text-gray-400" />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-500">Add a new application</p>
          </div>
        </div>
      </div>
      
      {/* Simple instruction panel */}
      <div className="mt-12 bg-venice-light rounded-lg p-6 border border-venice-blue/20">
        <h2 className="text-lg font-medium text-venice-blue mb-2">Adding Your Applications</h2>
        <p className="text-gray-600">
          This dashboard is designed to be a central hub for all your Venice.io applications. Each application 
          will run independently with its own URL, but can be accessed from this portal.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700 mb-2">Option 1: Airtable Integration</h3>
            <p className="text-sm text-gray-500">
              Configure your Airtable base with an "Applications" table to dynamically manage applications.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700 mb-2">Option 2: Direct Code Editing</h3>
            <p className="text-sm text-gray-500">
              Modify the applications array in the dashboard component for a code-based approach.
            </p>
          </div>
        </div>
      </div>
      
      {/* Basic modal for adding applications - would be expanded with actual functionality */}
      {showAddModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowAddModal(false)}></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Add Application</h3>
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 text-left">
                      To add an application, you would:
                    </p>
                    <ul className="mt-2 text-sm text-gray-500 text-left list-disc pl-5">
                      <li>Configure your Airtable with application details</li>
                      <li>Or modify the applications array in the code</li>
                      <li>Each application needs a name, description, URL, and status</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-500 text-left">
                      This modal is a placeholder that would contain a form for adding applications when the integration is set up.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-venice-blue text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
