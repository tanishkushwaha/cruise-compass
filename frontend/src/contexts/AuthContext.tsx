import { createContext, useEffect, useState, useContext } from "react";
import axios from "../utils/axiosInstance";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
};

type AuthContextType = {
  loading: boolean;
  loggedIn: boolean;
  user: User | null;
};

// TODO: Clean this up later
const MOCK_USER = {
  firstName: "John",
  lastName: "Wick",
  email: "john@example.com",
  phone: "123456",
  role: "USER",
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(MOCK_USER);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);

        const res = await axios.get("/api/user");
        setUser(res.data.user);
        setLoggedIn(true);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Use useAuth() within the AuthProvider.");
  }

  return context;
};
