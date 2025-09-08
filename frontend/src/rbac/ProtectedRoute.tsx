import Forbidden from "../pages/others/Forbidden";
import SpinnerScreen from "../components/SpinnerScreen";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import { Role } from "./roles";

const ProtectedRoute = ({
  roles,
  Component,
}: {
  roles: Role[];
  Component: React.ReactNode;
}) => {
  const auth = useAuth();

  if (auth.loading) return <SpinnerScreen />;
  if (!auth.loggedIn) {
    return <Navigate to='/login' replace />;
  }
  if (auth.user && roles.includes(auth.user.role)) {
    return Component;
  }
  return <Forbidden />;
};
export default ProtectedRoute;
