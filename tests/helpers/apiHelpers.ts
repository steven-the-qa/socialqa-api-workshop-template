import { request } from '@playwright/test';

export const fetchActiveATS = async (title: string, location: string) => {
  const context = await request.newContext();

  const response = await context.get('https://active-jobs-db.p.rapidapi.com/active-ats-7d', {
    params: {
      title_filter: `"${title}"`,
      location_filter: `"${location}"`,
    },
  });

  return response;
};
