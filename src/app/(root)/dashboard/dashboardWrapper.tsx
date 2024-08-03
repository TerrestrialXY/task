import React from 'react';
import DashboardLayout from './dashboardLayout';

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardWrapper;
