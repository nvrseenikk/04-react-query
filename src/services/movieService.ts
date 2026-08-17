import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

export interface FetchMoviesResult {
  movies: Movie[];
  totalPages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMoviesResult> => {
  const response = await axios.get<FetchMoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: { query, page },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return {
    movies: response.data.results,
    totalPages: response.data.total_pages,
  };
};