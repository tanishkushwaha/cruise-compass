import { createContext, useEffect, useState, useContext } from "react";
import axios from "../utils/axiosInstance";
import { Role } from "../rbac/roles";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
};

type AuthContextType = {
  loading: boolean;
  loggedIn: boolean;
  logout: () => void;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
};

// TODO: Clean this up later
// const MOCK_USER: User = {
//   _id: '100'
//   firstName: "John",
//   lastName: "Wick",
//   email: "john@example.com",
//   phone: "123456",
//   role: "USER",
// };

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get("/api/user");
  //       setUser(res.data.user);
  //       setLoggedIn(true);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getUser();
  // }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);

    try {
      const res = await axios.post(
        "/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUser(res.data.user);
      setLoggedIn(true);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoggedIn(false);
    setUser(null);

    try {
      await axios.post("/api/logout");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, loggedIn, logout, loading }}>
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
