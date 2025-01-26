import { request } from '@playwright/test';
import { baseUrl } from '../../playwright.config';

export const getMovies = async (title: string) => {
  const context = await request.newContext();

  const response = await context.get(baseUrl, {
    params: {
      s: `${title}`,
    },
  });

  return response;
};
