import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isLogedIn = false;

  return <div>{isLogedIn ? <Outlet /> : <Navigate to="/login" />} </div>;
}

export default ProtectedRoute;
