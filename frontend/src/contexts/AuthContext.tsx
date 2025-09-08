import { createContext, useEffect, useState, useContext } from "react";
import axios from "../utils/axiosInstance";
import a from "axios";
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
  login: (
    email: string,
    password: string
  ) => Promise<"ServerIssue" | "InvalidCredentials" | null>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshSession = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/me");
        setUser(res.data.user);
        setLoggedIn(true);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    refreshSession();
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<"ServerIssue" | "InvalidCredentials" | null> => {
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
      return null;
    } catch (err) {
      if (a.isAxiosError(err)) {
        if (err.code === "ECONNREFUSED" || err.code === "ERR_NETWORK") {
          return "ServerIssue";
        }
        if (err.response?.status === 401 || err.response?.status === 404) {
          return "InvalidCredentials";
        }
      }
      return null;
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
