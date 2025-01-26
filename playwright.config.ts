import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
// Now you can access your API key
const apiKey = process.env.RAPIDAPI_API_KEY;
const baseUrl = 'active-jobs-db.p.rapidapi.com';

export default defineConfig({
  testDir: './tests', // Directory where your tests are located
  timeout: 30000, // Global timeout for tests
  expect: {
    timeout: 5000, // Timeout for expect assertions
  },
  reporter: 'list', // Reporter format
  use: {
    // Configure the context for API tests
    baseURL: 'https://active-jobs-db.p.rapidapi.com', // Base URL for the Active Jobs API
    extraHTTPHeaders: {
      'x-rapidapi-host': `${baseUrl}`, // Replace with the actual host
      'x-rapidapi-key': `${apiKey}`, // Replace with your actual RapidAPI key
      'Content-Type': 'application/json', // Set content type if needed
    },
  }
});