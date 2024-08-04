import useFooterLinks from '@/app/(hooks)/useFooterLinks';
import { Typography } from '@mui/material';
import { Star } from 'lucide-react';
import Image from 'next/image';

type IconListProps = {
  icons: {
    icon: string;
    url: string;
    alt: string;
  }[];
};

const IconsList = ({ icons }: IconListProps) => {
  return (
    <>
      {icons.map((icon) => (
        <div key={icon.alt} className='w-10 h-12'>
          <a href={icon.url} target='_blank'>
            <Image
              height={100}
              width={100}
              src={icon.icon}
              alt={icon.alt}
              className='invert-color'
            />
          </a>
        </div>
      ))}
    </>
  );
};

const Footer = () => {
  const { SOCIAL, PAYMENTS } = useFooterLinks();
  return (
    <footer className='hidden h-212 bg-primary text-gray-50 flex-col flex-wrap md:flex md:flex-row md:justify-between px-12 py-4'>
      <div className='flex justify-between items-center gap-12 px-6 py-4'>
        <IconsList icons={SOCIAL} />
      </div>

      {/* Payments */}
      <div className='flex justify-between items-center gap-12 px-6 py-4'>
        <IconsList icons={PAYMENTS} />
      </div>

      <div className='flex justify-between items-center flex-wrap gap-12 px-6 py-4'>
        <div className='flex justify-between items-center gap-2 text-green-500 relative'>
          <Star />
          <Typography variant='h6' className='text-gray-50 font-semibold leading-none'>
            Trustpilot
          </Typography>
          <span className='absolute -top-2.5 -right-12 text-lg'>4.3</span>
        </div>

        <Typography variant='h6' className='py-2'>
          PlayerAuction
          <span className='inline-block px-4'>&#169; {new Date().getFullYear()}</span>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
