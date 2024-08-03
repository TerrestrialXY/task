import React from 'react';
import { Infinity } from 'lucide-react';

const Logo = () => {
  return (
      <button className='relative flex justify-center p-4'>
        <Infinity className='w-8 h-8 -rotate-[35deg] absolute inset-y-0' />
        <Infinity className='w-8 h-8 -rotate-[35deg] absolute -inset-y-1' />
      </button>
  );
};

export default Logo;
