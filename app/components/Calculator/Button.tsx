import React from 'react';

interface Props {
  type: 'number' | 'operation' | 'function' | 'memoryFunction';
  text: string;
}

export const Button: React.FC<Props> = ({ type, text }) => {
  const buttonBackgroundColor = () => {
    switch (type) {
      case 'operation':
        return 'bg-[#FF9500]';
      case 'function':
        return 'bg-[#D4D4D2]';
      default:
        return 'bg-[#505050]';
    }
  };

  const buttonTextColor = () => {
    switch (type) {
      case 'function':
        return 'text-black';
      default:
        return 'text-white';
    }
  };

  return <button className={`${buttonBackgroundColor()} w-14 h-14 rounded-full text-2xl ${buttonTextColor()}`}>{text}</button>;
};
