import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  loggedIn: boolean;
};

const useAuth = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<UserType>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    loggedIn: false,
  })

  useEffect(() => {
    setLoading(true)
    axios.get('/api/user')
      .then(res => {
        setUser({ ...res.data.user, loggedIn: true })

      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return { user, loading }
}

export default useAuth