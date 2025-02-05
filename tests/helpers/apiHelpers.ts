import { request } from '@playwright/test';
import { baseUrl } from '../../playwright.config';
const { writeFile } = require('fs').promises;
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

export const searchForMovie = async (s: string, r?: string, apiKey?: string) => {
  const context = await request.newContext();
  const response = await context.get(baseUrl, {
    params: {
      s: `${s}`,
    },
    headers: {
      'x-rapidapi-key': apiKey ?? `${process.env.RAPIDAPI_API_KEY}`
    }
  });

    // Save results for easy debugging later
  const responseBody = await response.json();
  saveResults('searchForMovieResponse.json', responseBody);

  return response;
};

async function saveResults(fileName: string, results: JSON) {
    const resultsJSON = JSON.stringify(results, null, 2); // Pretty print JSON
    try {
        await writeFile(`test-results/${fileName}`, resultsJSON, 'utf-8');
        console.log('File written successfully');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}