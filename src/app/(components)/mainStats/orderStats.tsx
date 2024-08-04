import { Typography } from '@mui/material';
import React from 'react';

const ORDER_TYPE = [
  { title: 'orders', info: '11,753', color: 'text-gray-50' },
  { title: 'positive', info: '99.24%', color: 'text-green-500' },
  { title: 'negative', info: '0.76%', color: 'text-red-500' },
];
type OrderTypeProps = {
  title: string;
  info: string;
  color: string;
};

const OrderType = ({ title, info, color }: OrderTypeProps) => (
  <div>
    <Typography variant='body2' className='capitalize text-md text-gray-200'>
      {title}
    </Typography>
    <Typography variant='body2' className={`font-semibold text-lg opacity-60 ${color}`}>
      {info}
    </Typography>
  </div>
);
const OrderStats = () => {
  return (
    <div className='hidden mr-4 lg:flex justify-between items-center gap-5'>
      {ORDER_TYPE.map((item) => (
        <OrderType key={item.title} title={item.title} info={item.info} color={item.color} />
      ))}
    </div>
  );
};

export default OrderStats;
