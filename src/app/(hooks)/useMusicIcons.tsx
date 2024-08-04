import { Bell, BookmarkCheck, MessageCircleMore, Settings } from 'lucide-react';
import React, { useMemo } from 'react';

const useMusicIcons = () => {
  const MUSIC_MENU  = useMemo(() => [
    {
      alt: 'playlist',
      icon: <BookmarkCheck />,
    },
    {
        alt: 'notification', 
        icon: <Bell />,
    },
    {
        alt: 'message', 
        icon:  <MessageCircleMore />,
    },
    {
        alt: 'settings', 
        icon:  <Settings />,
    },
  ], []);
  
  return { MUSIC_MENU };
};

export default useMusicIcons;
