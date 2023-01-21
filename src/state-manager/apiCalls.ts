import publicRequest from '@src/requestMethods';

interface UserRequestBody {
  step: 'LOGIN';
  username: string;
  password: string;
  token: string;
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

interface ResponseError {
  error: string; // what to put here when im building the object what string should go here? the error name?
  message: string; // and by extension here should only be the error msg?
}

const login = async (user: any) => {
  const userData: UserRequestBody = {
    step: 'LOGIN',
    username: user.username,
    password: user.password,
    token: 'test token',
  };

  try {
    console.log('logging in');
    const res: ResponseBody = await publicRequest.post('pre-auth', userData); // making this of type 'ResponseBody' allowed?
    console.log(`after lgoin: ${res}`);
  } catch (error: any) {
    // ask guy if this is how i should build the 'ResponseError' object.
    const resError: ResponseError = {
      error: error.name,
      message: error.message,
    };
    console.log(resError);
  }
};

export default login;
