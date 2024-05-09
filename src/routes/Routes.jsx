import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
    ],
  },
]);
export default router;
