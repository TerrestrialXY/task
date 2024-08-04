import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Crown, Star } from 'lucide-react';
import dayjs from 'dayjs';

const profileStats = () => {
  return (
    <div className='flex gap-5 justify-content items-start'>
      {/* PROFILE */}
      <div className='bg-gray-50 rounded-3xl overflow-hidden'>
        <Image
          alt='avatar-img'
          src='/assets/user-1.png'
          height={100}
          width={100}
          className='w-15 h-15'
        />
      </div>

      {/* RIGHT */}
      <div className='flex flex-col gap-5 '>
        <div className='flex gap-5'>
          <div className='relative bg-yellow-400 bg-opacity-30 rounded-lg'>
            <Typography
              variant='body2'
              align='center'
              className='text-orange-400 opacity-90 px-3 py-1 '
            >
              <span className='absolute -top-2 -left-2 -rotate-45 text-yellow-400'>
                <Star size={16} strokeWidth={1.75} />
              </span>
              4.9
            </Typography>
          </div>

          <div className='relative bg-red-400 bg-opacity-30 rounded-lg'>
            <Typography
              variant='body2'
              align='center'
              className='text-red-500 opacity-70 px-3 py-1 capitalize'
            >
              <span className='absolute -top-2 -left-2 -rotate-45 text-red-500'>
                <Crown size={16} strokeWidth={1.75} />
              </span>
              power seller
            </Typography>
          </div>
          {/* <Tags text='4.9' asset={<Star size={16} strokeWidth={1.75}/>} classes='text-black bg-yellow-200' />
          <Tags text='Power Selling' asset={<Crown size={16} strokeWidth={1.75} />} classes='' /> */}
        </div>

        <div className='flex flex-col'>
          <Typography variant='h6' className='font-semibold'>
            applegold
          </Typography>
          <Typography variant='body2' className='font-normal text-gray-400'>
            since {dayjs(new Date()).format('YYYY')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default profileStats;
