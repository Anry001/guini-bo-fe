import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { Stack, Container, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import login from '@src/state-manager/apiCalls';
// import axios from 'axios';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface UserRequestBody {
  step: 'LOGIN';
  username: string;
  password: string;
  token: string;
}

const LOGIN_TITLE = 'Welcome to the Admin Login Page';
const SIGNIN_BUTTON_TEXT = 'Sign In';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { register, handleSubmit } = useForm<LoginFormData>();

  const passwordIconAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  // should i construct userRequestData in this method? or should i pass userData to login method and construct UserRequestBody
  // in the login method? and thus moving the UserRequestBody interface to 'apiCalls' file?
  // was i supposed to use generrics on this method somehow? or on the login method?
  const fetchUserData = /* async */ (userData: LoginFormData) => {
    const userRequestData: UserRequestBody = {
      step: 'LOGIN',
      username: userData.username,
      password: userData.password,
      token: 'test token',
    };

    login(userRequestData);

    // try {
    //   console.log('logging in from Login.tsx');
    //   const res = await axios.post('/api/pre-auth', userRequestData);
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Stack
        onSubmit={handleSubmit(fetchUserData)}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        component="form"
      >
        <Typography textAlign="center" variant="h5">
          {LOGIN_TITLE}
        </Typography>
        <TextField
          fullWidth
          required
          label="User Name"
          {...register('username')}
        />
        <TextField
          fullWidth
          required
          {...register('password', { required: 'Password required' })}
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={passwordIconAdornment}
        />
        <Button type="submit" variant="contained">
          {SIGNIN_BUTTON_TEXT}
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
