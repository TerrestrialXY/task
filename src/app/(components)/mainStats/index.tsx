import React from 'react';
import { Typography } from '@mui/material';
import ProfileStats from './profileStats';
import OrderStats from './orderStats';
import Controls from './controls';

type TagsProps = {
  text: string;
  asset: React.ReactElement;
  classes: string;
};
const Tags = ({ text, asset, classes }: TagsProps) => (
  <div className='relative'>
    <Typography variant='body2' align='center' className={classes}>
      {text}
      <span className='absolute inset-y-0'>{asset}</span>
    </Typography>
  </div>
);

const MainStats = () => {
  return (
    <div className='px-8 py-10 bg-gray-500 blur-smh-full w-full rounded-[4.5rem] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 flex justify-between items-center'>
        <ProfileStats />
        <Controls />
        <OrderStats />
    </div>
  );
};

export default MainStats;
