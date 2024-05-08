import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home'
import VoyagerAdd from './pages/VoyagerAdd'
import VoyagerDetails from './pages/VoyagerDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/voyagers/add' element={<VoyagerAdd />} />
        <Route path='/voyagers/details' element={<VoyagerDetails />} />
      </Routes>

    </>
  )
}

export default App