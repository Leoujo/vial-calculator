import React from 'react';

interface Props {
  type: 'email' | 'password';
  placeholder: string;
}

export const Input: React.FC<Props> = ({ type, placeholder }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>{type}</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={type}
        type='text'
        placeholder={placeholder}
      ></input>
    </div>
  );
};
