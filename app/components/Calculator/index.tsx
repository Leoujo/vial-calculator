import React from 'react';
import { Button } from './Button';
import Input from './Input';

export const Calculator = () => {
  return (
    <div className='flex justify-center m-5'>
      <main className=' bg-slate-950 w-80 px-5 py-8 rounded-md '>
        <Input />
        <div className='flex justify-around grid grid-cols-4 gap-4'>
          <Button type='function' text='AC' />
          <Button type='function' text='+/-' />
          <Button type='function' text='%' />
          <Button type='operation' text='/' />

          <Button type='number' text='7' />
          <Button type='number' text='8' />
          <Button type='number' text='9' />
          <Button type='operation' text='x' />

          <Button type='number' text='4' />
          <Button type='number' text='5' />
          <Button type='number' text='6' />
          <Button type='operation' text='-' />

          <Button type='number' text='1' />
          <Button type='number' text='2' />
          <Button type='number' text='3' />
          <Button type='operation' text='+' />

          <Button type='number' text='0' />
          <Button type='number' text='0' />
          <Button type='number' text=',' />
          <Button type='operation' text='=' />
        </div>
      </main>
    </div>
  );
};
