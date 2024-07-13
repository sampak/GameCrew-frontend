import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import SignIn from './modules/auth/SignIn';
import SignUp from './modules/auth/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout>
          <>a</>
        </AppLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth',
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: '',
        element: <SignIn />,
      },
      {
        path: '*',
        element: <SignIn />,
      },
    ],
  },
]);
