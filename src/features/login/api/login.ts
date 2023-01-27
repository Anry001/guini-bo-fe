import { AuthData } from '@features/auth';
import apiRequest from '@utils/apiRequest';

interface RequestData {
  username: string;
  password: string;
}

const login = async ({ username, password }: RequestData) => {
  const res = await apiRequest.post<AuthData>('/admin/api/pre-auth', {
    step: 'LOGIN',
    username,
    password,
    token: 'test token',
  });
  return res.data;
};

export default login;
