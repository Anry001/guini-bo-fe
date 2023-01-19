import axios from 'axios';

const BASE_URL = 'https://api.guini.io/admin/api/';

const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export default publicRequest;
