import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  return (
    <div className='relative w-full flex justify-between items-center gap-10 py-2 rounded-3xl bg-gradient-to-br from-fuchsia-500 from-5% to-cyan-500'>
      <div className='w-56 h-56'>
        <Image alt='avatar1' src='/assets/avatar1.png' height={200} width={164}
        className='absolute -left-5 -top-10' />
      </div>

      <div className='flex flex-col items-center gap-5 px-2 py-4'>
        <Typography variant='h6' className='font-lg font-bold'>
          Account Calculator
        </Typography>
        <Typography variant='body1' className='font-lg text-gray-200' alignContent='baseline'>
        Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Typography>
      </div>
    </div>
  );
};

export default Avatar;
