import React from 'react';

interface Props {
  showHistory: boolean;
  history: string[];
}

export const HistoryArea: React.FC<Props> = ({ showHistory, history }) => {
  return (
    <>
      {showHistory && (
        <div data-testid="history-area" className='bg-white p-2 rounded-md text-center' >
          {history.map((operation, key) => (
            <div key={key}>{operation}</div>
          ))}
        </div>
      )}
    </>
  );
};
