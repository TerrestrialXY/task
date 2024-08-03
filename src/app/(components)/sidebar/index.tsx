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
import useSidebarIcons from '@/app/(hooks)/useSidebarMenu';



const Sidebar = () => {
  const {MENU_ITEMS, META_ICONS} = useSidebarIcons();
  return (
    <div className='w-32 rounded-br-[4.5rem]  bg-secondary flex flex-col items-center py-5'>
      <Logo />

      <div className='flex flex-grow flex-col justify-between'>
        {/* TOP */}
        <div className='flex flex-col gap-5 items-center px-0 py-4'>
          {MENU_ITEMS.map((item) => (
            <Tooltip key={item.label} title={item.label} placement='right-start' className=''>
              <IconButton className='text-gray-100 hover:text-gray-100'>{item.img}</IconButton>
            </Tooltip>
          ))}
        </div>

        {/* BOTTOM */}
        <div className='flex flex-col gap-5 items-center px-0 py-4'>
          {META_ICONS.map((item) => (
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
