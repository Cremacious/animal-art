import '@/assets/styles/globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import AdminNavbar from './admin-navbar';
import Footer from '@/components/shared/footer/footer';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdminNavbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
