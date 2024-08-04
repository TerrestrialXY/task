import React from 'react';
import Image from 'next/image';
import { IconButton, Typography } from '@mui/material';
import { Ellipsis } from 'lucide-react';

import dayjs from 'dayjs';

const NOTIFICATION_TYPE = [
  {
    title: 'skilling & levelling',
    info: 'OSRS crafting guide',
    author: { name: 'mina', img: '/assets/avatar.jpg', created_at: new Date() },
  },
  {
    title: 'tips and tricks',
    info: 'EA Sports FC 24 SBC Guide',
    author: {
      name: 'mina',
      img: '/assets/avatar-1.png',
      created_at: dayjs(new Date()).format('MMM DD'),
    },
  },
  {
    title: 'tips and tricks',
    info: 'Monster Hunter Now Referral Code Guide',
    author: {
      name: 'mina',
      img: '/assets/avatar-2.png',
      created_at: dayjs(new Date()).format('MMM DD'),
    },
  },
];

const Notification = () => {
  return (
    <div className='w-full flex flex-col gap-2 flex-start '>
      <Typography variant='h6' className='font-semibold text-gray-200 leading-normal'>
        Guides & Tips Player
      </Typography>
      {NOTIFICATION_TYPE.map((notification, index) => (
        <div
          key={`${notification.title}-${index}`}
        //   className='isolate aspect-video w-96 rounded-3xl bg-white/20 shadow-lg ring-1 ring-black/5 px-6 py-4 my-2'
        className='h-52 w-full px-6 py-4 my-2 bg-gray-200 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 '
        >
          <div className='flex justify-between items-center'>
            <Typography variant='h6' className='font-sm text-gray-200 leading-normal uppercase text-sm'>
              <span className='inline-block w-3 h-3 bg-green-500 rounded-full mr-2'></span>{' '}
              {notification.title}
            </Typography>

            <IconButton aria-label='action' className='text-gray-300'>
              <Ellipsis />
            </IconButton>
          </div>

          <Typography variant='h4' className='text-gray-50 text-2xl w-60 capitalize'>
            {notification.info}
          </Typography>

          <div className='flex flex-start items-center gap-2 py-2 my-2'>
            <div className='w-12 h-12'>
              <Image
                alt='avatar'
                src={notification.author.img}
                height={100}
                width={100}
                className='rounded-full'
              />
            </div>
            <Typography variant='body2' className='text-gray-50 uppercase text-lg'>
              BY <span className='underline leading-4'>{notification.author.name}</span>
            </Typography>

            <Typography variant='body1' className='text-gray-400 uppercase text-lg'>
              {dayjs(notification.author.created_at).format('MMM DD')}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
