import apiRequest from '@utils/apiRequest';

interface RequestData {
  username: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  groups: string[];
  role: string;
  username: string;
  verified: boolean;
}

interface ResponseBody {
  accessToken: string;
  refreshToken: string;
  user: User;
}

const login = async ({ username, password }: RequestData) => {
  const res = await apiRequest.post<ResponseBody>('/admin/api/pre-auth', {
    step: 'LOGIN',
    username,
    password,
    token: 'test token',
  });
  return res.data;
};

export default login;
