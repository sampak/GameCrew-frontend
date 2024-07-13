import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SignIn from "./modules/auth/SignIn";
import SignUp from "./modules/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout><>a</></AppLayout>,
  },
  {
    path: "/auth",
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      },      
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: '',
        element:  <SignIn />
      },
      {
        path: '*',
        element:  <SignIn />
      },
    ]
  },
]);