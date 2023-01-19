import axios from 'axios';
import env from '@src/config/env';

const publicRequest = axios.create({
  baseURL: `${env.VITE_BACKEND_URL}/admin/api`,
});

export default publicRequest;
