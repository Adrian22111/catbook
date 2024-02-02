import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthProvider';

function PrivateRoute({ element, ...rest }) {
    const { auth } = useContext(AuthContext);
  
    return auth.accessToken ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/" />
    );
  }
  
  export default PrivateRoute;

