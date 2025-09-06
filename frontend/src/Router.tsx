import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const NavbarWrapper = () => {
  const { loading, loggedIn } = useAuth();

  if (loading) return <h1>LOADING!</h1>;
  else if (!loggedIn) return <Navigate to='/login' />;
  else {
    return <Navbar />;
  }
};

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: NavbarWrapper,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/register",
      Component: Register,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
