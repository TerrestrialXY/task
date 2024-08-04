import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const BACKGROUND_ASSETS = [
  { alt: 'bg1', src: 'bg1.jpg' },
  { alt: 'bg2', src: 'bg2.png' },
  { alt: 'bg3', src: 'bg3.png' },
  { alt: 'bg4', src: 'bg4.png' },
];
const GameStats = () => {
  return (
    <>
      <div className='flex items-center'>
        <span className='inline-flex w-10 h-10 mx-4'>
          <Image
            alt='pie-chart'
            src='/assets/icons/pie-chart.svg'
            height={100}
            width={100}
            className='invert-color'
          />
        </span>
        <Typography variant='h6' align='center' className='font-semibold text-gray-400 uppercase'>
          YOUR GAME STATISTICS
        </Typography>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {BACKGROUND_ASSETS.map((asset, index) => (
          <div
            key={`${asset.alt}-${index}`}
            className='flex-grow bg-no-repeat bg-cover h-24 w-44 rounded-3xl cursor-pointer'
            style={{ backgroundImage: `url(/assets/background/${asset.src})` }}
          >
          </div>
        ))}
      </div>
    </>
  );
};

export default GameStats;
