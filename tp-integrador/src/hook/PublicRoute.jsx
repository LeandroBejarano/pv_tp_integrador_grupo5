import React from "react"
import { getSession } from "../session/sessionStorage"
import { Navigate } from "react-router-dom"

const PublicRoute = ({children}) => {
    const session = getSession();
    return session ? <Navigate to="/"/> : children
}

export default PublicRoute