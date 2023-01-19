import publicRequest from '@src/requestMethods';

// interface UserRequestBody {
//   step: 'LOGIN';
//   username: string;
//   password: string;
//   token: string;
// }

const login = async <T>(user: T) => {
  try {
    console.log('logging in');
    const res = await publicRequest.post('/pre-auth', user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default login;
