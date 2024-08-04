import { IconButton, Typography } from '@mui/material';
import { ArrowLeftRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TextWithControls = ({ text }: { text: string }) => (
  <div className='flex justify-between items-center px-2'>
    <Typography
      variant='body1'
      justifyContent='center'
      className='font-semibold text-xl text-gray-500'
    >
      {text}
    </Typography>

    <IconButton className='block text-gray-300'>
      <ChevronDown />
    </IconButton>
  </div>
);

const ExchangeControls = () => (
  <div>
    <hr className='w-full h-0 my-2 bg-gray-400' />
    <IconButton aria-label='exchange' size='small' className='bg-gray-500 hover:bg-gray-400 text-gray-200 hover:text-gray-50 h-10 w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <ArrowLeftRight />
    </IconButton>
  </div>
);

const CurrencyTracker = () => {
  return (
    <div className='h-80 w-full bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 flex justify-evenly gap-6 px-2'>
      {/* LEFT SIDE */}
      <div className='w-8 flex justify-center items-center bg-gradient-to-r from-fuchsia-500 to-rose-400 rounded-tl-full rounded-bl-full'>
        <div className='flex items-center justify-center gap-5 -rotate-90 py-4'>
          <Typography
            variant='body1'
            alignContent='center'
            className='font-semibold font-2xl text-gray-200 uppercase flex gap-3'
          >
            <span className='inline-flex'>&copy;</span>converting
          </Typography>
          <div className='bg-gray-600'>
            <span className='text-gray-300 font-semibold py-1 px-2'>01</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex flex-col flex-grow  justify-evenly gap-2 pr-6 py-4'>
        <div className='flex justify-between '>
          <Typography variant='body1' className='capitalize font-semibold text-xl'>
            Game Currency <br /> Phone Tracker
          </Typography>
          <Typography
            variant='body1'
            justifyContent='center'
            className='capitalize font-semibold text-xl text-gray-500'
          >
            Oct 24 <br /> &nbsp;&nbsp;2024
          </Typography>
        </div>

        <div className='relative bg-slate-700 rounded-3xl flex flex-col gap-3 py-2 px-4'>
          <TextWithControls text='USD' />
          <ExchangeControls />
          <TextWithControls text='Warframe Platinum' />
        </div>

        <Typography variant='body2' align='center' className='text-md uppercase w-full'>
          go to{' '}
          <Link href='#' className='underline leading-3'>
            market place tracker
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default CurrencyTracker;
