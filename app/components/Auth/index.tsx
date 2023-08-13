import React from 'react';
import { AuthModal } from './AuthModal';

export default function Auth() {
	const authHandler = () => {
		
	}
  return (
    <div className='bg-slate-100 w-80 p-4 mb-4 flex justify-center items-center'>
      <AuthModal type='logIn'/>
      <p>or</p>
      <AuthModal type='signIn'/>
    </div>
  );
}
