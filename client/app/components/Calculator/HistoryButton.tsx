import React from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface Props {
  toggleShowHistory: () => void;
  showHistory: boolean;
}

export const HistoryButton: React.FC<Props> = ({ toggleShowHistory, showHistory }) => {
  return (
    <button className='text-white w-full mt-6 p-2 mx-auto' onClick={toggleShowHistory}>
      <div className='flex justify-center items-center'>
        {showHistory ? <AiFillCaretUp /> : <AiFillCaretDown />}

        <p className='text-md mx-2'>Check history</p>
      </div>
    </button>
  );
};
