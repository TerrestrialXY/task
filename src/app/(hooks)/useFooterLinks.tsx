import React, { useMemo } from 'react';

const useFooterLinks = () => {
  const SOCIAL = useMemo(
    () => [
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
    ],
    []
  );

  const PAYMENTS = useMemo(
    () => [
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
    ],
    []
  );
  
  return {SOCIAL, PAYMENTS}
};

export default useFooterLinks;
