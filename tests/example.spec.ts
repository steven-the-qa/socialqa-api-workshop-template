// Import the helper function
import { test, expect } from '@playwright/test';
import { fetchActiveATS } from './helpers/apiHelpers'

test('Get active ATS for Data Engineer in the United States', async ({ request }) => {
  // Call the helper function
  const response = await fetchActiveATS('Data Engineer', 'United States');

  // Check if the response status is 200 (OK)
  expect(response.status()).toBe(200);

  // Optionally, you can check the response body
  const responseBody = await response.json();
  console.log(responseBody); // Log the response body for debugging

  // Add additional assertions based on the expected structure of the response
  expect(responseBody).toHaveProperty('data'); // Example assertion
});
