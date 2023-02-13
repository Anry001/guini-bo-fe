import { useAuthStore } from '@features/auth';
import { LoginPage } from '@features/login';
import { UsersList } from '@features/users';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

const publicRoutes = createBrowserRouter([
  { path: '*', element: <Navigate to="/login" /> },
  { path: 'login', element: <LoginPage /> },
]);

const protectedRoutes = createBrowserRouter([
  { path: '*', element: <UsersList /> },
  { path: 'login', element: <Navigate to="/" /> },
]);

const AppRouterProvider = () => {
  const isAuthenticated = useAuthStore((s) => !!s.user);
  return (
    <RouterProvider router={isAuthenticated ? protectedRoutes : publicRoutes} />
  );
};

export default AppRouterProvider;
