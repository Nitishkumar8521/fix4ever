import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fix4ever-yrf9.vercel.app/api',
});

export const setAuthToken = (token) => {
  if (token) API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete API.defaults.headers.common['Authorization'];
};

export default API;
