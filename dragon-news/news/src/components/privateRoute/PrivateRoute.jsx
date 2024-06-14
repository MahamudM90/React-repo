import { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export default function PrivateRoute({children}){
    const{user,loading}=useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }

    if(user){
        return Children;
    }
    return <Navigate state={location.pathname} to='/login'> </Navigate>
}

