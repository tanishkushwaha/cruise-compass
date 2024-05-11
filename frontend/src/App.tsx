import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './temp/Home'
import Navbar from './components/Navbar'
import AdminCatering from './pages/admin/AdminCatering'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminFood from './pages/admin/AdminFood'
import AdminMovies from './pages/admin/AdminMovies'
import AdminSnacks from './pages/admin/AdminSnacks'
import AdminStationery from './pages/admin/AdminStationery'
import AdminUsers from './pages/admin/AdminUsers'
import Catering from './pages/user/Catering'
import CateringOrders from './pages/headCook/CateringOrders'
import FoodOrders from './pages/headCook/FoodOrders'
import SnacksOrders from './pages/headCook/SnacksOrders'
import FitnessCenterBookings from './pages/manager/FitnessCenterBookings'
import Management from './pages/manager/Management'
import MovieBookings from './pages/manager/MovieBookings'
import PartyHallBookings from './pages/manager/PartyHallBookings'
import SalonBookings from './pages/manager/SalonBookings'
import StationeryOrders from './pages/supervisor/StationeryOrders'
import BeautySalon from './pages/user/BeautySalon'
import Book from './pages/user/Book'
import FitnessCenter from './pages/user/FitnessCenter'
import Food from './pages/user/Food'
import Movies from './pages/user/Movies'
import Order from './pages/user/Order'
import PartyHall from './pages/user/PartyHall'
import Snacks from './pages/user/Snacks'
import Stationery from './pages/user/Stationery'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Navbar />}>

          // USER ROUTES
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order/catering' element={<Catering />} />
          <Route path='/order/catering/food' element={<Food />} />
          <Route path='/order/catering/snacks' element={<Snacks />} />
          <Route path='/order/stationery' element={<Stationery />} />

          <Route path='/book' element={<Book />} />
          <Route path='/book/movies' element={<Movies />} />
          <Route path='/book/beauty-salon' element={<BeautySalon />} />
          <Route path='/book/fitness-centre' element={<FitnessCenter />} />
          <Route path='/book/party-hall' element={<PartyHall />} />


          // MANAGER ROUTES
          <Route path='/management' element={<Management />} />
          <Route path='/management/movie-bookings' element={<MovieBookings />} />
          <Route path='/management/salon-bookings' element={<SalonBookings />} />
          <Route path='/management/fitness-center-bookings' element={<FitnessCenterBookings />} />
          <Route path='/management/party-hall-bookings' element={<PartyHallBookings />} />


          // HEAD COOK ROUTES
          <Route path='/orders/catering' element={<CateringOrders />} />
          <Route path='/orders/catering/food' element={<FoodOrders />} />
          <Route path='/orders/catering/snacks' element={<SnacksOrders />} />


          // SUPERVISOR ROUTES
          <Route path='/orders/stationery' element={<StationeryOrders />} />


          // ADMIN ROUTES
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/admin/users' element={<AdminUsers />} />
          <Route path='/admin/movies' element={<AdminMovies />} />
          <Route path='/admin/catering' element={<AdminCatering />} />
          <Route path='/admin/catering/food' element={<AdminFood />} />
          <Route path='/admin/catering/snacks' element={<AdminSnacks />} />
          <Route path='/admin/stationery' element={<AdminStationery />} />

        </Route>
      </Routes>

    </>
  )
}

export default App