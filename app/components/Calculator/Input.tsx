import React from 'react';

interface Props {
  text: string;
}

export const Input: React.FC<Props> = ({ text }) => {
  const textHandler = () => {
    if (text === '') {
      return '0';
    }
    return text;
  };

  return <div className=' text-white flex justify-end py-4 text-5xl'>{textHandler()}</div>;
};
