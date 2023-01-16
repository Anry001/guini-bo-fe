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

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //ask guy why is this necessary, because even when deleted i see no difference
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  console.log(errors);

  const iconAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
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
        onSubmit={handleSubmit((data) => console.log(data))}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
        component="form"
      >
        <Typography textAlign="center" variant="h5">
          WELCOME TO THE ADMIN LOGIN PAGE
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
          InputProps={iconAdornment}
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
