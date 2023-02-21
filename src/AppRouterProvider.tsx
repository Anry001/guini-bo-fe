import { useAuthStore } from '@features/auth';
import { LoginPage } from '@features/login';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { PartnerStoresList } from '@features/partner-stores';

const publicRoutes = createBrowserRouter([
  { path: '*', element: <Navigate to="/login" /> },
  { path: 'login', element: <LoginPage /> },
]);

const protectedRoutes = createBrowserRouter([
  { path: 'login', element: <Navigate to="/" /> },
  { path: 'users-list', element: <PartnerStoresList /> },
]);

const AppRouterProvider = () => {
  const isAuthenticated = useAuthStore((s) => !!s.user);
  return (
    <RouterProvider router={isAuthenticated ? protectedRoutes : publicRoutes} />
  );
};

export default AppRouterProvider;
