import React from "react";
import { isAuthenticated } from "../utils/checkToken";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to={"/"} />;
};

export default PrivateRoute;
