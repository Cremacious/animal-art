'use client';

// import Header from '@/components/shared/header';

// import Footer from '@/components/footer';

import { Navbar1 } from '@/components/shared/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Navbar1 />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 wrapper relative z-10">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
