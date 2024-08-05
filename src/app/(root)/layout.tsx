import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import '@/app/globals.css';
import DashboardLayout from '@/app/(root)/dashboard/dashboardLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}${ibmPlexSans.className}`}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}