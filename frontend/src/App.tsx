import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import AdminDashboard from './pages/admin/AdminDashboard'
import Catering from './pages/user/Catering'
import CateringOrders from './pages/headCook/CateringOrders'
import FoodOrders from './pages/headCook/FoodOrders'
import SnackOrders from './pages/headCook/SnackOrders'
import FitnessCentreBookings from './pages/manager/FitnessCentreBookings'
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
import PartyHall from './pages/user/PartyHall'
import Snacks from './pages/user/Snacks'
import Stationery from './pages/user/Stationery'
import Beverages from './pages/user/Beverages'
import NotFound from './pages/others/NotFound'
import BeverageOrders from './pages/headCook/BeverageOrders'
import AddUser from './pages/admin/AddUser'
import ViewUser from './pages/admin/ViewUser'
import ManageBeverageItems from './pages/admin/ManageBeverageItems'
import ManageFoodItems from './pages/admin/ManageFoodItems'
import ManageMovieItems from './pages/admin/ManageMovieItems'
import ManageSnackItems from './pages/admin/ManageSnackItems'
import ManageStationeryItems from './pages/admin/ManageStationeryItems'
import Register from './pages/auth/Register'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {

  return (
    <>
      <Routes>

        // AUTH
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        // USER ROUTES
        <Route element={<ProtectedRoutes role='USER' />}>
          <Route element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/order/catering' element={<Catering />} />
            <Route path='/order/catering/food' element={<Food />} />
            <Route path='/order/catering/snacks' element={<Snacks />} />
            <Route path='/order/catering/beverages' element={<Beverages />} />
            <Route path='/order/stationery' element={<Stationery />} />

            <Route path='/book' element={<Book />} />
            <Route path='/book/movies' element={<Movies />} />
            <Route path='/book/beauty-salon' element={<BeautySalon />} />
            <Route path='/book/fitness-centre' element={<FitnessCenter />} />
            <Route path='/book/party-hall' element={<PartyHall />} />
          </Route>
        </Route>


          // MANAGER ROUTES
        <Route path='/management' element={<Management />} />
        <Route path='/management/movie-bookings' element={<MovieBookings />} />
        <Route path='/management/salon-bookings' element={<SalonBookings />} />
        <Route path='/management/fitness-center-bookings' element={<FitnessCentreBookings />} />
        <Route path='/management/party-hall-bookings' element={<PartyHallBookings />} />


          // HEAD COOK ROUTES
        <Route path='/orders/catering' element={<CateringOrders />} />
        <Route path='/orders/catering/food' element={<FoodOrders />} />
        <Route path='/orders/catering/snacks' element={<SnackOrders />} />
        <Route path='/orders/catering/beverages' element={<BeverageOrders />} />


          // SUPERVISOR ROUTES
        <Route path='/orders/stationery' element={<StationeryOrders />} />

          // ADMIN ROUTES
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/users/add' element={<AddUser />} />
        <Route path='/admin/users/view' element={<ViewUser />} />
        <Route path='/admin/movies' element={<ManageMovieItems />} />
        <Route path='/admin/catering/food' element={<ManageFoodItems />} />
        <Route path='/admin/catering/snacks' element={<ManageSnackItems />} />
        <Route path='/admin/catering/beverages' element={<ManageBeverageItems />} />
        <Route path='/admin/stationery' element={<ManageStationeryItems />} />


        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App