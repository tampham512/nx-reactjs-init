import { fetchBaseQuery } from '@reduxjs/toolkit/query';
const URL_API = import.meta.env.VITE_APP_API_AUTH_URL;
export const baseNoAuthQuery = fetchBaseQuery({
  baseUrl: URL_API,
  cache: 'no-cache',
});
