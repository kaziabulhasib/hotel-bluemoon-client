import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Error from "../pages/Error";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import RoomDetails from "../pages/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`),
      },

      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`),
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          // fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`),
          fetch(`http://localhost:9000/room/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
    ],
  },
]);
export default router;
