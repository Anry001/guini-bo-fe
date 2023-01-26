import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import login from '@src/state-manager/apiCalls';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
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

  const submitHandler: SubmitHandler<LoginFormData> = (userData) => {
    try {
      login({ username: userData.username, password: userData.password });
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Stack
        onSubmit={handleSubmit(submitHandler)}
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
