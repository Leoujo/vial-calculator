'use client';
import jwt from 'jsonwebtoken'; // Import the jwt library

import React, { useEffect, useState } from 'react';
import { AuthModal } from './AuthModal';

export default function Auth() {
  const [userEmail, setUserEmail] = useState(null);
  // Check if has a valid jwt to get the data from.
  const decodeTokenHandler = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      setUserEmail(null);
    }
    const decodedToken = jwt.decode(token);

    if (!decodedToken) {
      return;
    }

    // Check expiration time
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return;
    }

    // If it's all good, update user's email.
    setUserEmail(decodedToken.userEmail);
  };

  // Updates the state if user reloads.
  useEffect(() => {
    decodeTokenHandler();
  }, []);

  return (
    <div className='bg-slate-100 w-80 p-4 mb-4 flex justify-center items-center'>
      {userEmail ? (
        <>
          <p>Welcome {userEmail}!</p>
          <AuthModal type='signOut' decodeTokenHandler={decodeTokenHandler} />
        </>
      ) : (
        <>
          <AuthModal type='logIn' decodeTokenHandler={decodeTokenHandler} />
          <p>or</p>
          <AuthModal type='signUp' decodeTokenHandler={decodeTokenHandler} />
        </>
      )}
    </div>
  );
}
