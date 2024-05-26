import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Navbar from './components/Navbar'
import NotFound from './pages/others/NotFound'
import Register from './pages/auth/Register'
import ProtectedRoute from './rbac/ProtectedRoute'
import routes from './routes'

const App = () => {

  return (
    <>
      <Routes>

        // AUTH
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route element={<Navbar />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={
              <ProtectedRoute roles={route.roles}>
                {route.element}
              </ProtectedRoute>
            } />
          ))
          }
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App