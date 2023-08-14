'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { AuthModal } from './AuthModal';
import { User } from '@/app/types/user';
import { logInUser, signUpUser } from '@/app/api/services/auth';
import { decodeTokenHandler } from '@/app/utils/utilts';

export default function Auth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiHandler = async (type: string, data: User) => {
    setLoading(true);
    try {
      if (type === 'signUp') {
        const userData = await signUpUser(data);
        setUser(userData);
      } else if (type === 'logIn') {
        const userData = await logInUser(data);
        setUser(userData);
      }
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  const signOutHandler = () => {
    setUser(null);
  };

  // If pages reloads and jwt is valid, user should persist.
  useEffect(() => {
    const decodedToken = decodeTokenHandler();
    if (decodedToken) {
      setUser(decodedToken);
    }
    setLoading(false);
  }, []);

  // Controls what should be render on loading, error and etc.
  const authWrapper = () => {
    if (loading) {
      return 'loading...';
    } else if (error) {
      return 'error!';
    } else if (user) {
      return (
        <>
          <p>Welcome {user.email}!</p>
          <button onClick={signOutHandler} className='py-2 px-4 rounded font-bold text-[#FF9500]'>
            signOut
          </button>
        </>
      );
    } else {
      return (
        <>
          <AuthModal type='logIn' apiHandler={apiHandler} />
          <p>or</p>
          <AuthModal type='signUp' apiHandler={apiHandler} />
        </>
      );
    }
  };

  return <div className='bg-slate-100 w-80 p-4 mb-4 flex justify-center items-center'>{authWrapper()}</div>;
}
