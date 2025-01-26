import { test, expect } from '@playwright/test';
import { fetchActiveATS } from './helpers/apiHelpers';
import type { Job } from './helpers/apiTypes';

test('Get active ATS for Data Engineer in the United States', async () => {
  const response = await fetchActiveATS('Data Engineer', 'United States');
  expect(response.status()).toBe(200);
  
  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBe(true);
  
  responseBody.forEach((job: Job) => {
    expect(job).toHaveProperty('id');
    expect(job).toHaveProperty('date_posted');
    expect(job.title).toContain('Data Engineer');
    expect(job).toHaveProperty('organization');
    expect(job).toHaveProperty('url');
    expect(job).toHaveProperty('employment_type');
  });
});
