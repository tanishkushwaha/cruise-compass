import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type AuthContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const defaultUser: User = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  setUser: () => { }
})

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState(defaultUser)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </ AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}