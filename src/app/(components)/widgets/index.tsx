import React from 'react';
import CurrencyTracker from './currencyTracker';
import GameStats from './gameStats';
import Notification from './notification';
import Avatar from './avatar';
import Music from './music';

const Widgets = () => {
  return (
    <aside className='w-96 px-2 py-4 mr-10 hidden md:flex flex-col items-center justify-normal gap-10'>
      <Music />
      <Avatar />
      <CurrencyTracker />
      <GameStats />
      <Notification />
    </aside>
  );
};

export default Widgets;
