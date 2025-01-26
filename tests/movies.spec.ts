import { test, expect } from '@playwright/test';
import { getMovies } from './helpers/apiHelpers';
import type { Movie } from './helpers/apiTypes';

test('Can search for movies', async () => {
  const response = await getMovies('Avengers');
  expect(response.status()).toBe(200);
  
  const responseBody = await response.json();
  const searchResults = responseBody["Search"];
  expect(Array.isArray(searchResults)).toBe(true);
  
  searchResults.forEach((movie: Movie) => {
    expect(movie).toHaveProperty('Title');
    expect(movie).toHaveProperty('Year');
    expect(movie).toHaveProperty('imdbID');
    expect(movie).toHaveProperty('Type');
    expect(movie).toHaveProperty('Poster');
  });
});
