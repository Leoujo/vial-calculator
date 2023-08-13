import React from 'react';

interface Props {
  showHistory: boolean;
}

export const HistoryArea: React.FC<Props> = ({ showHistory }) => {
  return <>{showHistory && <div className='bg-white p-2 rounded-md'>2+2=4</div>}</>;
};
