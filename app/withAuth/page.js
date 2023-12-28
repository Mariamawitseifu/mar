import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token; // Check if the token exists

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirect to the login page if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;