import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext";
import SpinnerScreen from "./SpinnerScreen";
import Forbidden from "../pages/others/Forbidden";

const ProtectedRoutes = ({ role }: { role: string }) => {
  const auth = useAuth()

  if (auth.loading) return <SpinnerScreen />

  if (!auth.user.role) return <Navigate to='/login' />

  if (auth.user.role !== role) return <Forbidden />

  return <Outlet />
}

export default ProtectedRoutes