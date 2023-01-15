import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const theme = createTheme();
interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  console.log(errors);

  return (
    <StyledBox>
      <Typography component="h1" variant="h5">
        WELCOME TO THE ADMIN LOGIN PAGE
      </Typography>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <TextField required label="User Name" {...register('username')} />
        <TextField
          required
          {...register('password', { required: 'Password required' })}
          label="Password"
          type="password"
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>{' '}
    </StyledBox>
  );
};

export default Login;

const StyledBox = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(8)}px;
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'center';
  align-items: 'center';
`;

//stack is flex as a component read on it.
//grid learn about it.
