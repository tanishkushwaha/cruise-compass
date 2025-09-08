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
import ProtectedRoute from "./rbac/ProtectedRoute";
import { roles } from "./rbac/roles";
import Logout from "./pages/auth/Logout";

const NavbarWrapper = () => {
  const { loading, loggedIn } = useAuth();

  if (!loggedIn) return <Navigate to='/login' />;
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
          element: <ProtectedRoute roles={[roles.USER]} Component={<Home />} />,
        },
        {
          path: "management",
          element: (
            <ProtectedRoute
              roles={[roles.MANAGER]}
              Component={<Management />}
            />
          ),
        },
        {
          path: "account",
          Component: Account,
        },
        {
          path: "order/catering",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<Catering />} />
          ),
        },
        {
          path: "order/catering/food",
          element: <ProtectedRoute roles={[roles.USER]} Component={<Food />} />,
        },
        {
          path: "order/catering/snacks",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<Snacks />} />
          ),
        },
        {
          path: "order/catering/beverages",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<Beverages />} />
          ),
        },
        {
          path: "order/stationery",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<Stationery />} />
          ),
        },
        {
          path: "book",
          element: <ProtectedRoute roles={[roles.USER]} Component={<Book />} />,
        },
        {
          path: "book/movies",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<Movies />} />
          ),
        },
        {
          path: "book/beauty-salon",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<BeautySalon />} />
          ),
        },
        {
          path: "book/fitness-center",
          element: (
            <ProtectedRoute
              roles={[roles.USER]}
              Component={<FitnessCenter />}
            />
          ),
        },
        {
          path: "book/party-hall",
          element: (
            <ProtectedRoute roles={[roles.USER]} Component={<PartyHall />} />
          ),
        },
        {
          path: "management/movie-bookings",
          element: (
            <ProtectedRoute
              roles={[roles.MANAGER]}
              Component={<MovieBookings />}
            />
          ),
        },
        {
          path: "management/salon-bookings",
          element: (
            <ProtectedRoute
              roles={[roles.MANAGER]}
              Component={<SalonBookings />}
            />
          ),
        },
        {
          path: "management/fitness-center-bookings",
          element: (
            <ProtectedRoute
              roles={[roles.MANAGER]}
              Component={<FitnessCentreBookings />}
            />
          ),
        },
        {
          path: "management/party-hall-bookings",
          element: (
            <ProtectedRoute
              roles={[roles.MANAGER]}
              Component={<PartyHallBookings />}
            />
          ),
        },
        {
          path: "orders/catering",
          element: (
            <ProtectedRoute
              roles={[roles.HEAD_COOK]}
              Component={<CateringOrders />}
            />
          ),
        },
        {
          path: "orders/catering/food",
          element: (
            <ProtectedRoute
              roles={[roles.HEAD_COOK]}
              Component={<FoodOrders />}
            />
          ),
        },
        {
          path: "orders/catering/snacks",
          element: (
            <ProtectedRoute
              roles={[roles.HEAD_COOK]}
              Component={<SnackOrders />}
            />
          ),
        },
        {
          path: "orders/catering/beverages",
          element: (
            <ProtectedRoute
              roles={[roles.HEAD_COOK]}
              Component={<BeverageOrders />}
            />
          ),
        },
        {
          path: "orders/stationery",
          element: (
            <ProtectedRoute
              roles={[roles.SUPERVISOR]}
              Component={<StationeryOrders />}
            />
          ),
        },
        {
          path: "admin",
          element: (
            <ProtectedRoute
              roles={[roles.ADMIN]}
              Component={<AdminDashboard />}
            />
          ),
        },
        {
          path: "admin/users/add",
          element: (
            <ProtectedRoute roles={[roles.ADMIN]} Component={<AddUser />} />
          ),
        },
        {
          path: "admin/users/view",
          element: (
            <ProtectedRoute roles={[roles.ADMIN]} Component={<ViewUser />} />
          ),
        },
        {
          path: "admin/users/edit/:id",
          element: (
            <ProtectedRoute roles={[roles.ADMIN]} Component={<EditUser />} />
          ),
        },
        {
          path: "admin/movies",
          element: (
            <ProtectedRoute
              roles={[roles.ADMIN]}
              Component={<ManageMovieItems />}
            />
          ),
        },
        {
          path: "admin/catering/food",
          element: (
            <ProtectedRoute
              roles={[roles.ADMIN]}
              Component={<ManageFoodItems />}
            />
          ),
        },
        {
          path: "admin/catering/snacks",
          element: (
            <ProtectedRoute
              roles={[roles.ADMIN]}
              Component={<ManageSnackItems />}
            />
          ),
        },
        {
          path: "admin/catering/beverages",
          element: (
            <ProtectedRoute
              roles={[roles.ADMIN]}
              Component={<ManageBeverageItems />}
            />
          ),
        },
        {
          path: "admin/stationery",
          element: (
            <ProtectedRoute
              roles={[roles.ADMIN]}
              Component={<ManageStationeryItems />}
            />
          ),
        },
        {
          path: "cart",
          element: <ProtectedRoute roles={[roles.USER]} Component={<Cart />} />,
        },
      ],
    },
    {
      path: "login",
      Component: Login,
    },
    {
      path: "logout",
      element: (
        <ProtectedRoute roles={Object.values(roles)} Component={<Logout />} />
      ),
    },
    {
      path: "register",
      Component: Register,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
