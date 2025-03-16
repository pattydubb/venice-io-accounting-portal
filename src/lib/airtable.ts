import Airtable from 'airtable';

// Initialize Airtable client
const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = airtable.base(process.env.AIRTABLE_BASE_ID || '');

export type Application = {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  status: string;
  category: string;
};

export type UserPreferences = {
  id: string;
  userId: string;
  favoriteApps: string[];
  theme: string;
};

// Get applications from Airtable
export async function getApplications(): Promise<Application[]> {
  try {
    const records = await base('Applications').select({
      view: 'Grid view',
    }).all();
    
    return records.map(record => ({
      id: record.id,
      name: record.get('Name') as string,
      description: record.get('Description') as string,
      url: record.get('URL') as string,
      icon: record.get('Icon') as string,
      status: record.get('Status') as string,
      category: record.get('Category') as string,
    }));
  } catch (error) {
    console.error('Error fetching applications:', error);
    return [];
  }
}

// Get user preferences from Airtable
export async function getUserPreferences(userId: string): Promise<UserPreferences> {
  try {
    const records = await base('UserPreferences').select({
      filterByFormula: `{UserId} = '${userId}'`,
      maxRecords: 1,
    }).all();
    
    if (records.length === 0) {
      // Create default preferences if none exist
      const newRecord = await base('UserPreferences').create({
        UserId: userId,
        FavoriteApps: '',
        Theme: 'light',
      });
      
      return {
        id: newRecord.id,
        userId: userId,
        favoriteApps: [],
        theme: 'light',
      };
    }
    
    const record = records[0];
    const favoriteAppsString = record.get('FavoriteApps') as string;
    
    return {
      id: record.id,
      userId: userId,
      favoriteApps: favoriteAppsString ? favoriteAppsString.split(',') : [],
      theme: record.get('Theme') as string,
    };
  } catch (error) {
    console.error('Error fetching user preferences:', error);
    return {
      id: '',
      userId: userId,
      favoriteApps: [],
      theme: 'light',
    };
  }
}

// Update user preferences in Airtable
export async function updateUserPreferences(
  preferencesId: string, 
  data: { favoriteApps?: string[], theme?: string }
): Promise<boolean> {
  try {
    const updateData: Record<string, any> = {};
    
    if (data.favoriteApps) {
      updateData.FavoriteApps = data.favoriteApps.join(',');
    }
    
    if (data.theme) {
      updateData.Theme = data.theme;
    }
    
    await base('UserPreferences').update(preferencesId, updateData);
    return true;
  } catch (error) {
    console.error('Error updating user preferences:', error);
    return false;
  }
}
