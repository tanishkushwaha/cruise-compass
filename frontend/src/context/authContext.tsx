import { useState, createContext, useContext, useEffect } from "react";
import axios from "../utils/axiosInstance";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
};

type AuthContextType = {
  user: User;
  loading: boolean;
};

const defaultUser: User = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: '',
};

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  loading: true,
})

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState(defaultUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/user')
      .then(res => {
        setUser(res.data.user)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </ AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}