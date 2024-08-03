import { House, Mic, Swords, Store, LayoutDashboard, Info, Baby, ScrollText, Sun } from 'lucide-react';
import React, { useMemo } from 'react'

const useSidebarMenu = () => {
    const MENU_ITEMS = useMemo(() =>[
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
      ], []);
      
      const META_ICONS = useMemo(() =>[
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
      ], []);
      
      return {MENU_ITEMS, META_ICONS}
}

export default useSidebarMenu