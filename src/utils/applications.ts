import { Application } from '@/components/AppCard';
import { getApplications as getAirtableApplications } from '@/lib/airtable';

// Default applications if Airtable is not configured
const defaultApplications: Application[] = [
  {
    id: 'recked',
    name: 'RecKed',
    description: 'Automatic bank reconciliation tool that matches transactions',
    url: 'https://recked.venice.io',
    status: 'Active',
    category: 'Reconciliation',
  }
];

/**
 * Check if Airtable is configured
 */
const isAirtableConfigured = (): boolean => {
  return !!(
    typeof process !== 'undefined' && 
    process.env.AIRTABLE_API_KEY && 
    process.env.AIRTABLE_BASE_ID
  );
};

/**
 * Get applications from Airtable or fallback to default applications
 */
export async function getApplications(): Promise<Application[]> {
  // If Airtable is not configured, return default applications
  if (!isAirtableConfigured()) {
    console.log('Airtable not configured, using default applications');
    return defaultApplications;
  }
  
  try {
    // Try to get applications from Airtable
    const airtableApps = await getAirtableApplications();
    
    // If Airtable returned applications, use those
    if (airtableApps && airtableApps.length > 0) {
      return airtableApps.map(app => ({
        id: app.id,
        name: app.name,
        description: app.description,
        url: app.url,
        status: app.status as 'Active' | 'Coming Soon' | 'Maintenance',
        category: app.category,
        icon: app.icon,
      }));
    }
  } catch (error) {
    console.log('Error getting applications from Airtable, using defaults', error);
  }
  
  // Fallback to default applications
  return defaultApplications;
}

/**
 * Add a new application (mock function for now)
 */
export async function addApplication(application: Omit<Application, 'id'>): Promise<Application | null> {
  // If Airtable is not configured, show message in console but return a mock success
  if (!isAirtableConfigured()) {
    console.log('Airtable not configured - application would be added here if it was');
    return {
      ...application,
      id: `app-${Date.now()}`,
    };
  }
  
  // This would integrate with Airtable in production
  console.log('Adding application to Airtable', application);
  
  // For now, just return a mock response
  return {
    ...application,
    id: `app-${Date.now()}`,
  };
}

/**
 * Update an existing application (mock function for now)
 */
export async function updateApplication(id: string, application: Partial<Application>): Promise<Application | null> {
  // If Airtable is not configured, show message in console but return a mock success
  if (!isAirtableConfigured()) {
    console.log('Airtable not configured - application would be updated here if it was');
    return {
      ...defaultApplications[0],
      ...application,
      id,
    };
  }
  
  // This would integrate with Airtable in production
  console.log('Updating application in Airtable', id, application);
  
  // For now, just return a mock response
  return {
    ...defaultApplications[0],
    ...application,
    id,
  };
}

/**
 * Delete an application (mock function for now)
 */
export async function deleteApplication(id: string): Promise<boolean> {
  // If Airtable is not configured, show message in console but return a mock success
  if (!isAirtableConfigured()) {
    console.log('Airtable not configured - application would be deleted here if it was');
    return true;
  }
  
  // This would integrate with Airtable in production
  console.log('Deleting application from Airtable', id);
  
  // For now, just return success
  return true;
}
