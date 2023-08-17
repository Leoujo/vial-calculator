'use client';

import React from 'react';
import { AuthModal } from './AuthModal';
import { User } from '@/app/types/user';
import { logInUser, signUpUser } from '@/app/api/services/auth';
import { Toaster, toast } from 'react-hot-toast';
import { useAuth } from '@/app/hooks/useAuth';

export default function Auth() {
  const { user, logInHandler, logOutHandler, loading } = useAuth();

  const notifyError = (text: string) => toast.error(text ? text : 'Error on auth!');
  const notifySuccess = () => toast.success('Auth successfull!');

  // handle api requests.
  const apiHandler = async (type: string, data: User) => {
    try {
      if (type === 'signUp') {
        const userData = await signUpUser(data);
        logInHandler(userData);
        notifySuccess();
      } else if (type === 'logIn') {
        const userData = await logInUser(data);
        logInHandler(userData);
        notifySuccess();
      }
    } catch (error: any) {
      notifyError(error.response?.data?.error);
    }
  };

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
          <button onClick={logOutHandler} className='py-2 px-4 rounded font-bold text-[#FF9500]'>
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
