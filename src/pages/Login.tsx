import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { Stack, Container, InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

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

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Stack
        onSubmit={handleSubmit(console.log)}
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
