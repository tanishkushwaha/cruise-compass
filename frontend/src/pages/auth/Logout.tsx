import { useEffect } from "react"
import SpinnerScreen from "../../components/SpinnerScreen"
import axios from "../../utils/axiosInstance"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    axios.post('/api/logout')
      .then(() => {
        navigate('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <SpinnerScreen />
  )
}

export default Logout