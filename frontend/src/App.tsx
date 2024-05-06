import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>

    </>
  )
}

export default App