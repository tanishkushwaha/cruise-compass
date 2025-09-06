import { Navigate } from "react-router";
import roles from "../rbac/roles";
import { useAuth } from "../contexts/AuthContext";

const RedirectByUserRole = () => {
  const auth = useAuth();
  if (auth.user?.role === roles.USER) {
    return <Navigate to='/home' />;
  }
  if (auth.user?.role === roles.MANAGER) {
    return <Navigate to='/management' />;
  }
  if (auth.user?.role === roles.HEAD_COOK) {
    return <Navigate to='/orders/catering' />;
  }
  if (auth.user?.role === roles.SUPERVISOR) {
    return <Navigate to='/orders/stationery' />;
  }
  if (auth.user?.role === roles.ADMIN) {
    return <Navigate to='/admin' />;
  }
};

export default RedirectByUserRole;
