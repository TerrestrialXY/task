import { Typography } from '@mui/material';
import { DollarSign, NotepadText, ThumbsUp } from 'lucide-react';
import React from 'react';

const ICONS_LIST = [
  {
    icon: null,
    label: '30 Days',
    classes: 'text-gray-400',
  },
  {
    icon: <DollarSign size={14} />,
    label: 'Sales >1000',
    clases: 'text-green-500',
  },
  {
    icon: <NotepadText size={14} />,
    label: '30 Days',
  },
  {
    icon: <ThumbsUp size={14} />,
    label: 'Rate >4.5',
  },
];

const Controls = () => {
  return (
    <div className='w-[400px] 3xl:min-w-[650px] h-48 px-10 bg-slate-900 opacity-80 rounded-tl-[3.5rem] rounded-tr-[3.5rem] hidden 2xl:flex flex-wrap flex-col justify-center items-center gap-5 translate-y-10'>
      <div className='h-10 w-full bg-slate-800 rounded-full flex justify-between'>
        <div className='h-full w-2/5 bg-blue-800 opacity-95 brightness-200 rounded-full'>
          <Typography
            variant='body2'
            className='text-gray-50 text-lg font-semibold text-left py-2 px-4'
          >
            2 level
          </Typography>
        </div>
          <Typography
            variant='body2'
            className='text-gray-50 text-lg font-semibold text-left py-2 px-4'
          >
          3 level
          </Typography>
      </div>
      {/* TAGS */}
      <div className=' flex flex-wrap justify-between items-center gap-5 cursor-pointer text-gray-50'>
        {ICONS_LIST.map((item) => (
          <div
            key={item.label}
            className={`bg-slate-950 opacity-65 max-w-44 px-8 py-3 rounded-3xl flex gap-2 items-center ${
              item.clases || ''
            }`}
          >
            {item.icon && <span className='w-4 h-4 pointer-events-none'>{item.icon}</span>}
            <Typography variant='body2'>{item.label}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Controls;
