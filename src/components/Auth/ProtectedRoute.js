import {useContext} from "react";
import AuthContext from "./auth-context";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute=()=>{
    const {isLoggedIn}= useContext(AuthContext)
    return isLoggedIn ? <Outlet /> : <Navigate to="/" />

}
