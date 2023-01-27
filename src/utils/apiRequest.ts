import axios from 'axios';
import env from '@config/env';

const apiRequest = axios.create({
  baseURL: `${env.VITE_BACKEND_URL}`,
});

export default apiRequest;
