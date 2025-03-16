'use client';

import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import AppCard, { Application } from '@/components/AppCard';

// Example application - this would come from Airtable in production
const exampleApp: Application = {
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
          {/* Example application card using our new component */}
          <AppCard app={exampleApp} />

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
            <pre className="mt-2 bg-gray-50 p-2 rounded text-xs overflow-auto">
{`// Expected Airtable structure:
{
  "Name": "App Name",
  "Description": "App description",
  "URL": "https://app.venice.io",
  "Status": "Active", // or "Coming Soon" or "Maintenance"
  "Category": "Category"
}`}
            </pre>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-700 mb-2">Option 2: Direct Code Editing</h3>
            <p className="text-sm text-gray-500">
              Modify the applications array in the dashboard component for a code-based approach.
            </p>
            <pre className="mt-2 bg-gray-50 p-2 rounded text-xs overflow-auto">
{`// Add to apps array:
const apps = [
  {
    id: "app-id",
    name: "App Name",
    description: "Description",
    url: "https://app.venice.io",
    status: "Active",
    category: "Category"
  }
];`}
            </pre>
          </div>
        </div>
      </div>
      
      {/* Basic modal for adding applications */}
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
                    <form className="space-y-4">
                      <div className="text-left">
                        <label htmlFor="app-name" className="block text-sm font-medium text-gray-700">
                          Application Name
                        </label>
                        <input
                          type="text"
                          name="app-name"
                          id="app-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-venice-blue focus:border-venice-blue sm:text-sm"
                          placeholder="RecKed"
                        />
                      </div>
                      
                      <div className="text-left">
                        <label htmlFor="app-description" className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          name="app-description"
                          id="app-description"
                          rows={3}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-venice-blue focus:border-venice-blue sm:text-sm"
                          placeholder="Describe what the application does"
                        ></textarea>
                      </div>
                      
                      <div className="text-left">
                        <label htmlFor="app-url" className="block text-sm font-medium text-gray-700">
                          Application URL
                        </label>
                        <input
                          type="url"
                          name="app-url"
                          id="app-url"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-venice-blue focus:border-venice-blue sm:text-sm"
                          placeholder="https://app.venice.io"
                        />
                      </div>
                      
                      <div className="text-left">
                        <label htmlFor="app-status" className="block text-sm font-medium text-gray-700">
                          Status
                        </label>
                        <select
                          id="app-status"
                          name="app-status"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-venice-blue focus:border-venice-blue sm:text-sm rounded-md"
                        >
                          <option value="Active">Active</option>
                          <option value="Coming Soon">Coming Soon</option>
                          <option value="Maintenance">Maintenance</option>
                        </select>
                      </div>
                      
                      <div className="text-left">
                        <label htmlFor="app-category" className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <input
                          type="text"
                          name="app-category"
                          id="app-category"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-venice-blue focus:border-venice-blue sm:text-sm"
                          placeholder="Reconciliation"
                        />
                      </div>
                      
                      <div className="text-xs text-gray-500 text-left mt-4">
                        <p>
                          This form is a placeholder. When integrated with Airtable, it would save the 
                          application to your Airtable base.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-venice-blue text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                >
                  Add Application
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
