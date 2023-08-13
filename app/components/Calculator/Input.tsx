import React from 'react';

interface Props {
  text: string
}

export const Input: React.FC<Props> = ({ text }) => {
  return <div className=' text-white flex justify-end py-4 text-5xl'>{text === '' ? '0' : text}</div>;
};
