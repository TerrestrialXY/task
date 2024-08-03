import { Typography } from '@mui/material';
import { Star } from 'lucide-react';
import Image from 'next/image';

const socials = [
  {
    icon: '/assets/icons/social/fb.svg',
    url: '/www.facebook.com',
    alt: 'Facebook',
  },
  {
    icon: '/assets/icons/social/x.png',
    url: '/www.x.com',
    alt: 'X',
  },
  {
    icon: '/assets/icons/social/youtube.svg',
    url: '/www.youtube.com',
    alt: 'Youtube',
  },
  {
    icon: '/assets/icons/social/discord.svg',
    url: '/www.discord.com',
    alt: 'Discord',
  },
];

const payments = [
  {
    icon: '/assets/icons/payments/apple-pay.png',
    url: '/www.applepay.com',
    alt: 'Facebook',
  },
  {
    icon: '/assets/icons/payments/gpay.png',
    url: '/www.googlepay.com',
    alt: 'X',
  },
  {
    icon: '/assets/icons/payments/visa.png',
    url: '/www.mastercard.com',
    alt: 'Docker',
  },
  {
    icon: '/assets/icons/payments/mastercard.png',
    url: '/www.visa.com',
    alt: 'Discord',
  },
  {
    icon: '/assets/icons/payments/skrill.png',
    url: '/www.mastercard.com',
    alt: 'Docker',
  },
  {
    icon: '/assets/icons/payments/neteller.png',
    url: '/www.mastercard.com',
    alt: 'Docker',
  },
];

const Footer = () => {
  return (
    <footer className='hidden h-28 bg-primary text-gray-50 md:flex justify-between items-center px-8 py-4'>
      <div className='flex justify-between items-center gap-12'>
        {socials.map((icon) => (
          <div key={icon.alt} className='w-8 h-8'>
            <a href={icon.url} target='_blank'>
              <Image
                height={100}
                width={100}
                src={icon.icon}
                alt={icon.alt}
                className='img-filter-invert'
              />
            </a>
          </div>
        ))}
      </div>

      {/* Payments */}
      <div className='flex justify-between items-center gap-12'>
        {payments.map((icon) => (
          <div key={icon.alt} className='w-8 h-8 '>
            <a href={icon.url} target='_blank'>
              <Image
                height={100}
                width={100}
                src={icon.icon}
                alt={icon.alt}
                className='img-filter-invert'
              />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center flex-wrap gap-12 px-4 py-2">
        <div className="flex justify-content items-center gap-2 text-green-500 relative">
          <Star />
          <Typography variant='h6' className='text-gray-50 font-semibold leading-none'>Trustpilot</Typography>
          <span className='absolute -top-2.5 -right-8 text-lg'>4.3</span>
        </div>

        <Typography variant='h6' className='py-2'>PlayerAuction
          <span className="inline-block px-4">&#169; {new Date().getFullYear()}</span>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
