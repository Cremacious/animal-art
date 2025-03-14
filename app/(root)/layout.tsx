'use client';
import Header from '@/components/shared/header';
// import Footer from '@/components/footer';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import SearchSidebar from './search/search-sidebar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isSearchPage = pathname === '/search';

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          {isSearchPage && <SearchSidebar />}
          <main className="flex-1 wrapper relative z-10">
            {isSearchPage && <SidebarTrigger />}
            {children}
          </main>
        </SidebarProvider>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
