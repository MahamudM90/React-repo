import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../root/Main";
import Home from "../components/Home/Home";
import Login from "../components/shared/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/errorPage/errorPage";
import NewsDetail from "../components/newsDetail/newsDetail";
import PrivateRoute from "../components/privateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/news/:id',
          element: <PrivateRoute> <NewsDetail></NewsDetail> </PrivateRoute>   
        
        },
      ]

    },
  ]);

  export default router;