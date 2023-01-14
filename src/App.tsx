import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';

const theme = createTheme();
interface LoginFormData {
  username: string;
  password: string;
  rememberMe: boolean;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  console.log(errors);

  return (
    <>
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
    </>
  );
}
//if i find the the right template find where the specific requirement in the template is, and understand it.
// learn: https://m2.material.io/design
//read material introduction page.
//only use templates if i understand it all
