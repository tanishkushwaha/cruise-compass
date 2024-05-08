import { Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Home from './pages/Home'
import VoyagerAdd from './pages/VoyagerAdd'
import VoyagerDetails from './pages/VoyagerDetails'
import ManageCatering from './pages/ManageCatering'
import ManageStationery from './pages/ManageStationery'
import ManageMovies from './pages/ManageMovies'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/voyagers/add' element={<VoyagerAdd />} />
        <Route path='/voyagers/details' element={<VoyagerDetails />} />
        <Route path='/manage/catering' element={<ManageCatering />} />
        <Route path='/manage/stationery' element={<ManageStationery />} />
        <Route path='/manage/movies' element={<ManageMovies />} />
      </Routes>

    </>
  )
}

export default App