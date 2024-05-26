import AddUser from "./pages/admin/AddUser"
import AdminDashboard from "./pages/admin/AdminDashboard"
import ManageBeverageItems from "./pages/admin/ManageBeverageItems"
import ManageFoodItems from "./pages/admin/ManageFoodItems"
import ManageMovieItems from "./pages/admin/ManageMovieItems"
import ManageSnackItems from "./pages/admin/ManageSnackItems"
import ManageStationeryItems from "./pages/admin/ManageStationeryItems"
import ViewUser from "./pages/admin/ViewUser"
import BeverageOrders from "./pages/headCook/BeverageOrders"
import CateringOrders from "./pages/headCook/CateringOrders"
import SnackOrders from "./pages/headCook/SnackOrders"
import Home from "./pages/home/Home"
import FitnessCentreBookings from "./pages/manager/FitnessCentreBookings"
import Management from "./pages/manager/Management"
import MovieBookings from "./pages/manager/MovieBookings"
import PartyHallBookings from "./pages/manager/PartyHallBookings"
import SalonBookings from "./pages/manager/SalonBookings"
import StationeryOrders from "./pages/supervisor/StationeryOrders"
import Account from "./pages/user/Account"
import BeautySalon from "./pages/user/BeautySalon"
import Beverages from "./pages/user/Beverages"
import Book from "./pages/user/Book"
import Catering from "./pages/user/Catering"
import FitnessCenter from "./pages/user/FitnessCenter"
import Food from "./pages/user/Food"
import Movies from "./pages/user/Movies"
import PartyHall from "./pages/user/PartyHall"
import Snacks from "./pages/user/Snacks"
import Stationery from "./pages/user/Stationery"

type RouteType = {
  path: string;
  element: JSX.Element;
  roles: string[];
}

const routes: RouteType[] = [
  // User routes
  { path: '/', element: <Home />, roles: ['USER', 'MANAGER'] },
  { path: '/account', element: <Account />, roles: ['USER', 'MANAGER'] },
  { path: '/order/catering', element: <Catering />, roles: ['USER'] },
  { path: '/order/catering/food', element: <Food />, roles: ['USER'] },
  { path: '/order/catering/snacks', element: <Snacks />, roles: ['USER'] },
  { path: '/order/catering/beverages', element: <Beverages />, roles: ['USER'] },
  { path: '/order/stationery', element: <Stationery />, roles: ['USER'] },
  { path: '/book', element: <Book />, roles: ['USER'] },
  { path: '/book/movies', element: <Movies />, roles: ['USER'] },
  { path: '/book/beauty-salon', element: <BeautySalon />, roles: ['USER'] },
  { path: '/book/fitness-centre', element: <FitnessCenter />, roles: ['USER'] },
  { path: '/book/party-hall', element: <PartyHall />, roles: ['USER'] },
  // Manager routes
  { path: '/management', element: <Management />, roles: ['MANAGER'] },
  { path: '/management/movie-bookings', element: <MovieBookings />, roles: ['MANAGER'] },
  { path: '/management/salon-bookings', element: <SalonBookings />, roles: ['MANAGER'] },
  { path: '/management/fitness-center-bookings', element: <FitnessCentreBookings />, roles: ['MANAGER'] },
  { path: '/management/party-hall-bookings', element: <PartyHallBookings />, roles: ['MANAGER'] },
  // Head cook routes
  { path: '/orders/catering', element: <CateringOrders />, roles: ['HEAD_COOK'] },
  { path: '/orders/catering/food', element: <CateringOrders />, roles: ['HEAD_COOK'] },
  { path: '/orders/catering/snacks', element: <SnackOrders />, roles: ['HEAD_COOK'] },
  { path: '/orders/catering/beverages', element: <BeverageOrders />, roles: ['HEAD_COOK'] },
  // Supervisor routes
  { path: '/orders/stationery', element: <StationeryOrders />, roles: ['SUPERVISOR'] },
  // Admin routes
  { path: '/admin', element: <AdminDashboard />, roles: ['ADMIN'] },
  { path: '/admin/users/add', element: <AddUser />, roles: ['ADMIN'] },
  { path: '/admin/users/view', element: <ViewUser />, roles: ['ADMIN'] },
  { path: '/admin/movies', element: <ManageMovieItems />, roles: ['ADMIN'] },
  { path: '/admin/catering/food', element: <ManageFoodItems />, roles: ['ADMIN'] },
  { path: '/admin/catering/snacks', element: <ManageSnackItems />, roles: ['ADMIN'] },
  { path: '/admin/catering/beverages', element: <ManageBeverageItems />, roles: ['ADMIN'] },
  { path: '/admin/stationery', element: <ManageStationeryItems />, roles: ['ADMIN'] },
]

export default routes
