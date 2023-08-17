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
  const [memory, setMemory] = useState('');

  // History
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  
  // Handles general logic.
  const handleButton = (value: string) => {
    setResult('');
    if (value === '√x') {
      setHistory((prev) => [...prev, `√${input}`]);
      const sqrtResult = Math.sqrt(eval(input));
      setInput(sqrtResult.toString());
    } else if (value === '%') {
      setHistory((prev) => [...prev, `${input}%`]);
      const percentage = eval(input) / 100;
      setInput(percentage.toString());
    } else {
      setInput(input + value);
    }
  };

  // Handles only memory related logic.
  const handleMemoryButton = (memoryOption: string) => {
    const inputCopy = input === '' ? 0 : parseInt(input);
    const memoryCopy = memory === '' ? 0 : parseInt(memory);

    if (memoryOption === 'M+') {
      const sumString = (memoryCopy + inputCopy).toString();
      setMemory(sumString);
    } else if (memoryOption === 'M-') {
      const subtractionString = (memoryCopy - inputCopy).toString();
      setMemory(subtractionString);
    } else if (memoryOption === 'MR') {
      setInput(memory);
    } else {
      setMemory('');
    }
  };

  const handleCalculate = () => {
    try {
      setHistory((prev) => [...prev, input]);
      setResult(eval(input).toString());
      setInput(eval(input).toString());
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
    <main className=' bg-slate-950 w-80 px-5 py-8 rounded-md '>
      <Input text={result !== '' ? result : input} />
      <div className='flex justify-around grid grid-cols-4 gap-4'>
        <Button onClick={handleMemoryButton} type='memoryFunction' text='M+' />
        <Button onClick={handleMemoryButton} type='memoryFunction' text='M-' />
        <Button onClick={handleMemoryButton} type='memoryFunction' text='MR' isMemoryInUse={memory !== ''} />
        <Button onClick={handleMemoryButton} type='memoryFunction' text='MC' />

        <Button onClick={handleClear} type='function' text='AC' />
        <Button onClick={handleButton} type='function' text='√x' />
        <Button onClick={handleButton} type='function' text='x^y' specifyValue='**' />
        <Button onClick={handleButton} type='operation' text='÷' specifyValue='/' />

        <Button onClick={handleButton} type='number' text='7' />
        <Button onClick={handleButton} type='number' text='8' />
        <Button onClick={handleButton} type='number' text='9' />
        <Button onClick={handleButton} type='operation' text='x' specifyValue='*' />

        <Button onClick={handleButton} type='number' text='4' />
        <Button onClick={handleButton} type='number' text='5' />
        <Button onClick={handleButton} type='number' text='6' />
        <Button onClick={handleButton} type='operation' text='-' />

        <Button onClick={handleButton} type='number' text='1' />
        <Button onClick={handleButton} type='number' text='2' />
        <Button onClick={handleButton} type='number' text='3' />
        <Button onClick={handleButton} type='operation' text='+' />

        <Button onClick={handleButton} type='number' text='0' />

        <Button onClick={handleButton} type='number' text='.' />
        <Button onClick={handleButton} type='number' text='%' />
        <Button onClick={handleCalculate} type='operation' text='=' />
      </div>
      {history.length && (
        <>
          <HistoryButton toggleShowHistory={toggleShowHistory} showHistory={showHistory} />
          <HistoryArea showHistory={showHistory} history={history} />
        </>
      )}
    </main>
  );
};
