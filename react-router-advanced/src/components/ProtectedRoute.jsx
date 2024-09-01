import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth';

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth(); // Using useAuth to check authentication

  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
