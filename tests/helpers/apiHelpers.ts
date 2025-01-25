// apiHelper.ts
import { request } from '@playwright/test';

export const fetchActiveATS = async (title: string, location: string) => {
  const context = await request.newContext();

  const response = await context.get('https://active-jobs-db.p.rapidapi.com/active-ats-7d', {
    headers: {
      'x-rapidapi-host': 'active-jobs-db.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Use environment variable for security
    },
    params: {
      title_filter: `"${title}"`,
      location_filter: `"${location}"`,
    },
  });

  return response;
};
