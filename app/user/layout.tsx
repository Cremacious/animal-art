import '@/assets/styles/globals.css';

import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import UserNavbar from './user-navbar';

export const metadata: Metadata = {
  title: 'User Dashboard',
  description: 'User-specific pages',
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <UserNavbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
