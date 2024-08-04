'use client';

import React from 'react';
import Image from 'next/image';
import useMusicIcons from '@/app/(hooks)/useMusicIcons';
import {
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from '@mui/material';

type Props = { asset: { alt: string; icon: React.ReactElement } };

const MusicMenu = ({ asset }: Props) => {
  return (
    <div className='bg-slate-700 rounded-lg px-6 py-5 flex items-center justify-center w-12 h-9'>
      <IconButton aria-label={asset.alt} size='small' className='text-gray-200'>
        {asset.icon}
      </IconButton>
    </div>
  );
};

const Music = () => {
  const { MUSIC_MENU } = useMusicIcons();

  return (
    <div className='w-full h-52 flex flex-col items-center justify-center gap-5 rounded-3xl py-2 px-5 bg-gradient-to-bl from-violet-600 to-fuchsia-300'>
      <div className='flex flex-row justify-between items-center gap-5'>
        <Image
          height={100}
          width={100}
          src='/assets/avatar.jpg'
          alt='avatar'
          className='rounded-full w-14 h-14'
        />

        {/* ICONS */}
        <div className='flex col justify-between items-center gap-5'>
          {MUSIC_MENU.map((item, index) => (
            <MusicMenu key={index} asset={item} />
          ))}
        </div>
      </div>

      <LinearProgress variant='determinate' value={50} className='text-gray-50' />

      <div className='flex justify-between items-center w-full'>
        <Typography variant='body1'>
          Orders: <span className='text-gray-50 font-semibold'>323</span>
        </Typography>
        <Typography variant='body1'>
          Need: <span className='text-gray-50 font-semibold'>24</span>
        </Typography>
      </div>
    </div>
  );
};

export default Music;
