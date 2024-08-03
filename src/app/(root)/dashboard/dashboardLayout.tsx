import Footer from '@/app/(components)/footer';
import Sidebar from '@/app/(components)/sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <main className='flex flex-row flex-grow'>
        <Sidebar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
