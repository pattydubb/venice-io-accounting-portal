'use client';

export default function AnalyticsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Analytics</h1>
        
        <div className="bg-white shadow rounded-lg px-5 py-6 sm:px-6">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No analytics yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                This is a placeholder for application usage analytics.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-venice-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-venice-blue"
                >
                  Set up analytics
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white shadow rounded-lg px-5 py-6 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Analytics Integration</h2>
          <p className="text-sm text-gray-500 mb-4">
            This is a placeholder for future analytics integration. When you add applications to the portal,
            you can track usage, performance, and other metrics here.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Analytics functionality will be added in a future update. This page is included as a placeholder for the dashboard navigation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <div className="block text-sm font-medium text-gray-700">Potential Analytics</div>
              <div className="mt-1 text-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Application usage statistics</li>
                  <li>User engagement metrics</li>
                  <li>Performance monitoring</li>
                  <li>Error tracking</li>
                </ul>
              </div>
            </div>
            
            <div className="sm:col-span-1">
              <div className="block text-sm font-medium text-gray-700">Integration Options</div>
              <div className="mt-1 text-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Google Analytics</li>
                  <li>Custom event tracking</li>
                  <li>Application-specific metrics</li>
                  <li>Dashboard reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
