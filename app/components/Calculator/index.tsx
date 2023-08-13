'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { HistoryButton } from './HistoryButton';
import { HistoryArea } from './HistoryArea';

export const Calculator = () => {
  // Calculator
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // History
  const [showHistory, setShowHistory] = useState(false);

  // Calculator's logic
  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // History logic
  const toggleShowHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className='flex justify-center m-5'>
      <main className=' bg-slate-950 w-80 px-5 py-8 rounded-md '>
        <Input text={result !== '' ? result : input} />
        <div className='flex justify-around grid grid-cols-4 gap-4'>
          <Button onClick={handleButtonClick} type='memoryFunction' text='M+' />
          <Button onClick={handleButtonClick} type='memoryFunction' text='M-' />
          <Button onClick={handleButtonClick} type='memoryFunction' text='MR' />
          <Button onClick={handleButtonClick} type='memoryFunction' text='MC' />

          <Button onClick={handleClear} type='function' text='AC' />
          <Button onClick={handleButtonClick} type='function' text='√x' />
          <Button onClick={handleButtonClick} type='function' text='x^y' />
          <Button onClick={handleButtonClick} type='operation' text='/' />

          <Button onClick={handleButtonClick} type='number' text='7' />
          <Button onClick={handleButtonClick} type='number' text='8' />
          <Button onClick={handleButtonClick} type='number' text='9' />
          <Button onClick={handleButtonClick} type='operation' text='x' specifyValue={'*'} />

          <Button onClick={handleButtonClick} type='number' text='4' />
          <Button onClick={handleButtonClick} type='number' text='5' />
          <Button onClick={handleButtonClick} type='number' text='6' />
          <Button onClick={handleButtonClick} type='operation' text='-' />

          <Button onClick={handleButtonClick} type='number' text='1' />
          <Button onClick={handleButtonClick} type='number' text='2' />
          <Button onClick={handleButtonClick} type='number' text='3' />
          <Button onClick={handleButtonClick} type='operation' text='+' />

          <Button onClick={handleButtonClick} type='number' text='0' />

          <Button onClick={handleButtonClick} type='number' text=',' />
          <Button onClick={handleButtonClick} type='number' text='%' />
          <Button onClick={handleCalculate} type='operation' text='=' />
        </div>
        <HistoryButton toggleShowHistory={toggleShowHistory} showHistory={showHistory} />
        <HistoryArea showHistory={showHistory} />
      </main>
    </div>
  );
};
