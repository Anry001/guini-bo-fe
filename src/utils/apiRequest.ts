import axios, { AxiosHeaders } from 'axios';
import env from '@config/env';

const apiRequest = axios.create({
  baseURL: `${env.VITE_BACKEND_URL}`,
});

apiRequest.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('auth-store') as string).state
    .accessToken;

  if (token) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
  }

  return config;
});

export default apiRequest;
