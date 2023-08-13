'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  type: 'logIn' | 'signIn';
}

export const AuthModal: React.FC<Props> = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isSignIn = () => {
    return type === 'signIn';
  };

  return (
    <div className='flex justify-center items-center '>
      {/* Button to open the modal */}
      <button onClick={openModal} className=' text-black py-2 px-4 rounded hover:font-bold hover:text-[#FF9500]'>
        {isSignIn() ? 'Sign in' : 'Log in'}
      </button>

      {/* The modal */}
      {isModalOpen && (
        <div className='bg-black bg-opacity-75 fixed inset-0 flex justify-center items-center z-50'>
          <div className='bg-white shadow-md rounded p-8 rounded shadow-lg max-w-md'>
            <div className="flex justify-end cursor-pointer">
              <AiOutlineClose size={20} onClick={closeModal}/>
            </div>
            <div>
              <Input type='email' placeholder='email@email.com' />
              <Input type='password' placeholder='********' />
              <button onClick={closeModal} className=' bg-[#FF9500] text-white font-bold py-2 px-4 w-full rounded'>
                {isSignIn() ? 'Sign In' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
