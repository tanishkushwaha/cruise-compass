import { useEffect } from "react";
import SpinnerScreen from "../../components/SpinnerScreen";
import { useAuth } from "../../contexts/AuthContext";

const Logout = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.logout();
  }, []);
  return <SpinnerScreen />;
};

export default Logout;
