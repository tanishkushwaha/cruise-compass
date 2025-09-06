import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";
import RedirectByUserRole from "./components/RedirectByUserRole";
import Management from "./pages/manager/Management";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Account from "./pages/user/Account";
import Catering from "./pages/user/Catering";
import Food from "./pages/user/Food";
import Snacks from "./pages/user/Snacks";
import Beverages from "./pages/user/Beverages";
import Stationery from "./pages/user/Stationery";
import Book from "./pages/user/Book";
import Movies from "./pages/user/Movies";
import BeautySalon from "./pages/user/BeautySalon";
import FitnessCenter from "./pages/user/FitnessCenter";
import PartyHall from "./pages/user/PartyHall";
import MovieBookings from "./pages/manager/MovieBookings";
import SalonBookings from "./pages/manager/SalonBookings";
import FitnessCentreBookings from "./pages/manager/FitnessCentreBookings";
import PartyHallBookings from "./pages/manager/PartyHallBookings";
import BeverageOrders from "./pages/headCook/BeverageOrders";
import CateringOrders from "./pages/headCook/CateringOrders";
import SnackOrders from "./pages/headCook/SnackOrders";
import FoodOrders from "./pages/headCook/FoodOrders";
import StationeryOrders from "./pages/supervisor/StationeryOrders";
import AddUser from "./pages/admin/AddUser";
import EditUser from "./pages/admin/EditUser";
import ManageBeverageItems from "./pages/admin/ManageBeverageItems";
import ManageFoodItems from "./pages/admin/ManageFoodItems";
import ManageMovieItems from "./pages/admin/ManageMovieItems";
import ManageSnackItems from "./pages/admin/ManageSnackItems";
import ManageStationeryItems from "./pages/admin/ManageStationeryItems";
import ViewUser from "./pages/admin/ViewUser";
import Cart from "./pages/user/Cart";
import SpinnerScreen from "./components/SpinnerScreen";

const NavbarWrapper = () => {
  const { loading, loggedIn } = useAuth();

  if (loading) return <SpinnerScreen />;
  else if (!loggedIn) return <Navigate to='/login' />;
  else {
    return <Navbar />;
  }
};

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: NavbarWrapper,
      children: [
        {
          index: true,
          Component: RedirectByUserRole,
        },
        {
          path: "home",
          Component: Home,
        },
        {
          path: "management",
          Component: Management,
        },
        {
          path: "admin",
          Component: AdminDashboard,
        },
        {
          path: "account",
          Component: Account,
        },
        {
          path: "order/catering",
          Component: Catering,
        },
        {
          path: "order/catering/food",
          Component: Food,
        },
        {
          path: "order/catering/snacks",
          Component: Snacks,
        },
        {
          path: "order/catering/beverages",
          Component: Beverages,
        },
        {
          path: "order/stationery",
          Component: Stationery,
        },
        {
          path: "book",
          Component: Book,
        },
        {
          path: "book/movies",
          Component: Movies,
        },
        {
          path: "book/beauty-salon",
          Component: BeautySalon,
        },
        {
          path: "book/fitness-center",
          Component: FitnessCenter,
        },
        {
          path: "book/party-hall",
          Component: PartyHall,
        },
        {
          path: "management/movie-bookings",
          Component: MovieBookings,
        },
        {
          path: "management/salon-bookings",
          Component: SalonBookings,
        },
        {
          path: "management/fitness-center-bookings",
          Component: FitnessCentreBookings,
        },
        {
          path: "management/party-hall-bookings",
          Component: PartyHallBookings,
        },
        {
          path: "orders/catering",
          Component: CateringOrders,
        },
        {
          path: "orders/catering/food",
          Component: FoodOrders,
        },
        {
          path: "orders/catering/snacks",
          Component: SnackOrders,
        },
        {
          path: "orders/catering/beverages",
          Component: BeverageOrders,
        },
        {
          path: "orders/stationery",
          Component: StationeryOrders,
        },
        {
          path: "admin",
          Component: AdminDashboard,
        },
        {
          path: "admin/users/add",
          Component: AddUser,
        },
        {
          path: "admin/users/view",
          Component: ViewUser,
        },
        {
          path: "admin/users/edit/:id",
          Component: EditUser,
        },
        {
          path: "admin/movies",
          Component: ManageMovieItems,
        },
        {
          path: "admin/catering/food",
          Component: ManageFoodItems,
        },
        {
          path: "admin/catering/snacks",
          Component: ManageSnackItems,
        },
        {
          path: "admin/catering/beverages",
          Component: ManageBeverageItems,
        },
        {
          path: "admin/stationery",
          Component: ManageStationeryItems,
        },
        {
          path: "cart",
          Component: Cart,
        },
      ],
    },
    {
      path: "login",
      Component: Login,
    },
    {
      path: "register",
      Component: Register,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
