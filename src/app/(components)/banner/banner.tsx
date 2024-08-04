import { Button, Typography } from '@mui/material';
import { SquareUserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section>
      <div className='px-4 py-10'>
        <div className='text-white filter brightness-200 drop-shadow-md saturate-200 '>
          <Image src='/assets/warframe.svg' alt='warframe' width={200} height={200} />
        </div>
        <div className='my-10 w-full flex justify-between items-end gap-8 md:flex-col md:items-end'>
          <Typography variant='body1' className='w-64 text-gray-50 text-lg leading-relaxed'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident vel tenetur
            perferendis molestiae? Placeat laboriosam sequi adipisci qui velit doloribus
          </Typography>

          <Button
            variant='contained'
            startIcon={<SquareUserRound />}
            className=' w-56 h-12 py-2 hover:bg-[#336285a1] bg-[#336285b2] capitalize text-lg text-gray-50 font-extrabold rounded-2xl'
          >
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
