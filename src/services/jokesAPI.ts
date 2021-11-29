// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SingleCategoryJokes, Categories, Joke } from '../types/interfaces';

// Define a service using a base URL and expected endpoints
export const jokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/' }),
  endpoints: (builder) => ({
    getAllJokes: builder.query<SingleCategoryJokes, string>({
      query: (name: string) => `joke/${name}?type=twopart&amount=10`,
    }),
    getAllCategories: builder.query<Categories, undefined>({
      query: () => 'categories',
    }),
    getJoke: builder.query<Joke, string[]>({
      query: (name: string[]) => `joke/${name[0]}?type=twopart&idRange=${name[1]}`,
    }),
  }),
});

export const { reducer } = jokesApi;

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllJokesQuery, useGetAllCategoriesQuery, useGetJokeQuery } = jokesApi;
