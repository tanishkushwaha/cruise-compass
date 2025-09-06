import useAuth from "../hooks/useAuth";
import Forbidden from "../pages/others/Forbidden";
import SpinnerScreen from "../components/SpinnerScreen";

const ProtectedRoute = ({ roles, children }: any) => {
  const auth = useAuth();

  if (auth.loading) return <SpinnerScreen />;
  else {
    if (!auth.user.loggedIn) {
      // return <Navigate to='/login' />
    } else {
      if (roles.includes(auth.user.role)) {
        return children;
      } else {
        return <Forbidden />;
      }
    }
  }
};
export default ProtectedRoute;
