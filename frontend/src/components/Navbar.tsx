import { Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  )
}

export default Navbar