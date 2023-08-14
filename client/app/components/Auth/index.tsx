'use client';

import React, { useEffect, useState } from 'react';
import { AuthModal } from './AuthModal';
import { User } from '@/app/types/user';
import { logInUser, signUpUser } from '@/app/api/services/auth';
import { decodeTokenHandler } from '@/app/utils/utilts';
import { Toaster, toast } from 'react-hot-toast';

export default function Auth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const notifyError = () => toast.error('Error on auth!');
  const notifySuccess = () => toast.success('Auth successfull!');

  const apiHandler = async (type: string, data: User) => {
    setLoading(true);
    try {
      if (type === 'signUp') {
        const userData = await signUpUser(data);
        setUser(userData);
        notifySuccess();
      } else if (type === 'logIn') {
        const userData = await logInUser(data);
        setUser(userData);
        notifySuccess();
      }
    } catch (error) {
      notifyError();
    }

    setLoading(false);
  };

  const signOutHandler = () => {
    setUser(null);
    localStorage.removeItem('jwt');
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
      return (
        <div role='status' className='max-w-sm animate-pulse'>
          <div className='h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-60 mb-2'></div>
        </div>
      );
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

  return (
    <div className='bg-slate-100 w-80 p-4 mb-4 flex justify-center items-center'>
      <Toaster />
      {authWrapper()}
    </div>
  );
}
