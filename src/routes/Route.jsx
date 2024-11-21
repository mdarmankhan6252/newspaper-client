import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Auth from "../auth/Auth";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../Dashboard/AdminHome";
import AddNews from "../Dashboard/AddNews";
import ManageNews from "../Dashboard/ManageNews";
import AllUsers from "../Dashboard/AllUsers";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import AllNews from "../pages/AllNews/AllNews";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: '/about',
            element: <About />
         },
         {
            path: '/auth',
            element: <Auth />
         },
         {
            path: '/news',
            element: <AllNews />

         },
         {
            path: '/news/:id',
            element: <PrivateRoute><NewsDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/news/${params.id}`)
         }
      ]
   },
   {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
         {
            path: 'adminHome',
            element: <AdminHome />
         },
         {
            path: 'addNews',
            element: <AddNews />
         },
         {
            path: 'manageNews',
            element: <ManageNews />
         },
         {
            path: 'allUsers',
            element: <AllUsers />
         }
      ]
   }
]);

export default router;
