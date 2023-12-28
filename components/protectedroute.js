import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
 const { currentUser } = useContext(AuthContext);

 return (
   <Route
     {...rest}
     render={props =>
       currentUser ? (
         <Component {...props} />
       ) : (
         <Redirect to="/login" />
       )
     }
   />
 );
};

export default ProtectedRoute;
