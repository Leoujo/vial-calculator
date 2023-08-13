'use client';

import React, { useState } from 'react';
import { Input } from './Input';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import { signUpUser } from '@/app/api/services/auth';

interface Props {
  type: 'logIn' | 'signUp';
}

interface FormData {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup.string().required('Password is required'),
});

export const AuthModal: React.FC<Props> = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isSignUp = () => {
    return type === 'signUp';
  };

  const onSubmit = async (data: FormData) => {
    await signUpUser(data);

    closeModal();
  };

  return (
    <div className='flex justify-center items-center '>
      {/* Button to open the modal */}
      <button onClick={openModal} className=' text-black py-2 px-4 rounded hover:font-bold hover:text-[#FF9500]'>
        {isSignUp() ? 'Sign in' : 'Log in'}
      </button>

      {/* The modal */}
      {isModalOpen && (
        <div className='bg-black bg-opacity-75 fixed inset-0 flex justify-center items-center z-50'>
          <div className='bg-white shadow-md rounded p-8 rounded shadow-lg w-1/5'>
            <div className='flex justify-end cursor-pointer'>
              <AiOutlineClose size={20} onClick={closeModal} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input type='email' placeholder='email@email.com' register={register} errorMessage={errors.email?.message} />
              <Input type='password' placeholder='********' register={register} errorMessage={errors.password?.message} />
              <button type='submit' className=' bg-[#FF9500] text-white font-bold py-2 px-4 w-full rounded'>
                {isSignUp() ? 'Sign In' : 'Log In'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
