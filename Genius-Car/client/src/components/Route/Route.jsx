import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Services from "../Services/Services";
import About from "../About/About";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../CheckOut/CheckOut";
import Orders from "../Orders/Orders";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [{
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/service',
        element: <Services></Services>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute> ,
        loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`)

      },
      {
        path: '/order',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
    ],
      errorElement: <ErrorPage />,
    },
  ]);

  export default router;