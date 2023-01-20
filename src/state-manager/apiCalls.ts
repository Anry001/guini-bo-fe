import publicRequest from '@src/requestMethods';

// interface UserRequestBody {
//   step: 'LOGIN';
//   username: string;
//   password: string;
//   token: string;
// }

// ask guy if the type should be any or a generic?
const login = async <T>(user: T) => {
  try {
    console.log('logging in');
    const res = await publicRequest.post(
      /* '/api/pre-auth' */ 'pre-auth',
      user,
    );
    console.log(`after lgoin: ${res}`);
  } catch (error) {
    console.log(error);
  }
};

export default login;
