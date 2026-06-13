import axios from 'axios';

const API_URL =
  'https://dummyjson.com';

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 30000,

  headers: {
    'Content-Type': 'application/json',
  },
});