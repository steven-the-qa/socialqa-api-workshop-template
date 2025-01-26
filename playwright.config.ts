import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
// Now you can access your API key
const apiKey = process.env.RAPIDAPI_API_KEY;
export const host = 'movie-database-alternative.p.rapidapi.com';
export const baseUrl = `https://${host}`;

export default defineConfig({
  testDir: './tests', // Directory where your tests are located
  timeout: 30000, // Global timeout for tests
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  reporter: 'list', // Reporter format
  use: {
    // Configure the context for API tests
    baseURL: baseUrl, // Base URL for the Movies API
    extraHTTPHeaders: {
      'x-rapidapi-host': host, // Replace with the actual host
      'x-rapidapi-key': `${apiKey}`, // Replace with your actual RapidAPI key
      'Content-Type': 'application/json', // Set content type if needed
    },
  }
});