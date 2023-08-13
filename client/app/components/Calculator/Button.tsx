import React from 'react';

interface Props {
  type: 'number' | 'operation' | 'function' | 'memoryFunction';
  text: string;
  onClick: (value: string) => void;
  specifyValue?: string;
  isMemoryInUse?: boolean;
}

export const Button: React.FC<Props> = ({ type, text, onClick, specifyValue, isMemoryInUse }) => {
  const buttonBackgroundColor = () => {
    switch (type) {
      case 'operation':
        return 'bg-[#FF9500]';
      case 'function':
        return 'bg-[#D4D4D2]';
      case 'memoryFunction':
        if (isMemoryInUse) {
			return 'bg-[#727171]';
        }
        return 'bg-[#393939]';
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

  const handleClick = (e: any) => {
    onClick(e.target.value);
  };

  return (
    <button
      onClick={handleClick}
      value={specifyValue ? specifyValue : text}
      className={`
			${buttonBackgroundColor()} 
			h-14 
			rounded-full 
			text-2xl 
			${buttonTextColor()}`}
    >
      {text}
    </button>
  );
};
