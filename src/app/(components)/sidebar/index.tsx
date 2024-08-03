import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logo from '../logo/logo';
import {
  Baby,
  House,
  Info,
  LayoutDashboard,
  Mic,
  ScrollText,
  Store,
  Sun,
  Swords,
} from 'lucide-react';

const menuItems = [
  {
    label: 'Home',
    img: <House />,
    path: '/',
  },
  {
    label: 'Sounds',
    img: <Mic />,
    path: '/',
  },
  {
    label: 'Battle',
    img: <Swords />,
    path: '/',
  },
  {
    label: 'Market Place',
    img: <Store />,
    path: '/',
  },
  {
    label: 'Menu',
    img: <LayoutDashboard />,
    path: '/',
  },
];

const metaIcons = [
  {
    label: 'Info',
    img: <Info />,
    path: '/',
  },
  {
    label: 'Sounds',
    img: <Baby />,
    path: '/',
  },
  {
    label: 'Battle',
    img: <ScrollText />,
    path: '/',
  },
  {
    label: 'Market Place',
    img: <Sun />,
    path: '/',
  },
];

const Sidebar = () => {
  return (
    <div className='w-32 rounded-br-[4.5rem]  bg-secondary flex flex-col items-center py-5'>
      <Logo />

      <div className='flex flex-grow flex-col justify-between'>
        {/* TOP */}
        <div className='flex flex-col gap-5 items-center px-0 py-4'>
          {menuItems.map((item) => (
            <Tooltip key={item.label} title={item.label} placement='right-start' className=''>
              <IconButton className='text-gray-100 hover:text-gray-100'>{item.img}</IconButton>
            </Tooltip>
          ))}
        </div>

        {/* BOTTOM */}
        <div className='flex flex-col gap-5 items-center px-0 py-4'>
          {metaIcons.map((item) => (
            <Tooltip key={item.label} title={item.label} placement='right-start' className=''>
              <IconButton className='text-gray-100 hover:text-gray-100'>{item.img}</IconButton>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
