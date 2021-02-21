import axios from 'axios';

export const BASE_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}`;

const api = axios.create({
  baseURL: `${BASE_URL}`,
});

export default api;
