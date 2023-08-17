import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { User } from '../types/user';

// This hook handles: user state, loading and the jwt in local storage.
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const decodeTokenHandler = () => {
    let token = localStorage.getItem('jwt');
    if (!token) {
      return null;
    }
    const decodedToken: any = jwt.decode(token);

    if (!decodedToken) {
      return null;
    }

    // Check expiration time
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return null;
    }

    // If it's all good, return decoded token.
    return decodedToken;
  };

  // If pages reloads and jwt is valid, user should persist.
  useEffect(() => {
    const decodedToken = decodeTokenHandler();
    if (decodedToken) {
      setUser(decodedToken);
    }
    setLoading(false);
  }, []);


  // Logging user out
  const logOutHandler = () => {
    setUser(null);
    localStorage.removeItem('jwt');
  };

  // Logging user in
  const logInHandler = (userData: User) => {
	setLoading(true)
	setUser(userData)
	setLoading(false)
  }

  return {
    user,
	 logInHandler,
    loading,
	 setLoading,
    decodeTokenHandler,
    logOutHandler,
  };
};
