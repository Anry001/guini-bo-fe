import publicRequest from '@src/requestMethods';

interface UserRequestBody {
  step: 'LOGIN';
  username: string;
  password: string;
  token: string;
}

interface UserRequestData {
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

const login = async ({ username, password }: UserRequestData) => {
  const userData: UserRequestBody = {
    step: 'LOGIN',
    username,
    password,
    token: 'test token',
  };

  console.log('logging in');
  const res = await publicRequest.post<ResponseBody>('pre-auth', userData);
  console.log(`after lgoin: ${res}`);
};

export default login;
