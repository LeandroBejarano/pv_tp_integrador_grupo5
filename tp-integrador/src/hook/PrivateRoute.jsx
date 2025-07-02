import React from "react";
import { Navigate } from "react-router-dom";
import { getSession } from "../session/sessionStorage";

const PrivateRoute = ({ children }) => {
    const session = getSession();
    return session ? children : <Navigate to="/login" />;
};

export default PrivateRoute;