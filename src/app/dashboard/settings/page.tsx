'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [airtableApiKey, setAirtableApiKey] = useState('');
  const [airtableBaseId, setAirtableBaseId] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ text: '', type: '' });

    // In a real app, we'd save these to a secure location
    // For now, we'll simulate saving
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here we would save the values to a secure location
      console.log('Saving Airtable settings:', { airtableApiKey, airtableBaseId });
      
      setMessage({ 
        text: 'Settings saved successfully. Restart the application for changes to take effect.',
        type: 'success'
      });
    } catch (error) {
      setMessage({ 
        text: 'Error saving settings. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Settings</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Airtable Integration</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Connect your Airtable base to manage applications dynamically.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <label htmlFor="airtable-api-key" className="block text-sm font-medium text-gray-700">
                  Airtable API Key
                </label>
                <div className="mt-1">
                  <input
                    id="airtable-api-key"
                    name="airtable-api-key"
                    type="password"
                    value={airtableApiKey}
                    onChange={(e) => setAirtableApiKey(e.target.value)}
                    className="shadow-sm focus:ring-venice-blue focus:border-venice-blue block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="key..."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  You can find your API key in your Airtable account settings.
                </p>
              </div>

              <div>
                <label htmlFor="airtable-base-id" className="block text-sm font-medium text-gray-700">
                  Airtable Base ID
                </label>
                <div className="mt-1">
                  <input
                    id="airtable-base-id"
                    name="airtable-base-id"
                    type="text"
                    value={airtableBaseId}
                    onChange={(e) => setAirtableBaseId(e.target.value)}
                    className="shadow-sm focus:ring-venice-blue focus:border-venice-blue block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="app..."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  You can find your Base ID in the Airtable API documentation for your base.
                </p>
              </div>

              {message.text && (
                <div className={`rounded-md p-4 ${message.type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {message.type === 'success' ? (
                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className={`text-sm font-medium ${message.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-venice-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-venice-blue disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : 'Save Settings'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Airtable Schema Requirements</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Required table structure for applications management.
            </p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <h4 className="text-md font-medium text-gray-700 mb-2">Applications Table</h4>
            <div className="bg-gray-50 p-4 rounded overflow-auto">
              <pre className="text-xs text-gray-700">
{`Table Name: Applications

Fields:
- Name (Single line text)
- Description (Long text)
- URL (Single line text)
- Status (Single select: "Active", "Coming Soon", "Maintenance")
- Category (Single line text)
- Icon (Single line text, optional)`}
              </pre>
            </div>
            
            <h4 className="text-md font-medium text-gray-700 mb-2 mt-6">UserPreferences Table (Optional)</h4>
            <div className="bg-gray-50 p-4 rounded overflow-auto">
              <pre className="text-xs text-gray-700">
{`Table Name: UserPreferences

Fields:
- UserId (Single line text)
- FavoriteApps (Long text - comma-separated app IDs)
- Theme (Single select: "light", "dark")`}
              </pre>
            </div>
            
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Note: If you don't have an Airtable account, you can still use this portal by adding applications directly in the code. See the dashboard for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
