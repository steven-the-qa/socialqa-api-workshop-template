import { defineConfig } from '@playwright/test';

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
      'x-rapidapi-host': 'active-jobs-db.p.rapidapi.com', // Replace with the actual host
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual RapidAPI key
      'Content-Type': 'application/json', // Set content type if needed
    },
  }
});