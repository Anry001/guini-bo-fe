import { useAuthStore } from '@features/auth';
import Container from '@mui/material/Container';
import React from 'react';
import login from '../api/login';
import LoginForm, { LoginFormData } from './LoginForm';

const LoginPage = () => {
  const [loading, setLoading] = React.useState(false);
  const { setUserData } = useAuthStore();
  const handleSubmit = async ({ username, password }: LoginFormData) => {
    setLoading(true);
    try {
      const res = await login({ username, password });
      setUserData(res);
    } catch (e: unknown) {
      alert(`${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <LoginForm onSubmit={handleSubmit} loading={loading} />
    </Container>
  );
};

export default LoginPage;
