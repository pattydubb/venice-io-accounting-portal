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
 * Get applications from Airtable or fallback to default applications
 */
export async function getApplications(): Promise<Application[]> {
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
 * Add a new application
 */
export async function addApplication(application: Omit<Application, 'id'>): Promise<Application | null> {
  // This would integrate with Airtable in production
  console.log('Adding application', application);
  
  // For now, just return a mock response
  return {
    ...application,
    id: `app-${Date.now()}`,
  };
}

/**
 * Update an existing application
 */
export async function updateApplication(id: string, application: Partial<Application>): Promise<Application | null> {
  // This would integrate with Airtable in production
  console.log('Updating application', id, application);
  
  // For now, just return a mock response
  return {
    ...defaultApplications[0],
    ...application,
    id,
  };
}

/**
 * Delete an application
 */
export async function deleteApplication(id: string): Promise<boolean> {
  // This would integrate with Airtable in production
  console.log('Deleting application', id);
  
  // For now, just return success
  return true;
}
