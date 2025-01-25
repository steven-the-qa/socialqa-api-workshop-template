// apiHelper.ts
import { request } from '@playwright/test';
// Import the dotenv library
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Now you can access your API key
const apiKey = process.env.RAPIDAPI_KEY;


export const fetchActiveATS = async (title: string, location: string) => {
  const context = await request.newContext();

  const response = await context.get('https://active-jobs-db.p.rapidapi.com/active-ats-7d', {
    headers: {
      'x-rapidapi-host': 'active-jobs-db.p.rapidapi.com',
      'x-rapidapi-key': `${apiKey}`, // Use environment variable for security
    },
    params: {
      title_filter: `"${title}"`,
      location_filter: `"${location}"`,
    },
  });

  return response;
};
