import { useState } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login/logout functionality
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

export default useAuth;
