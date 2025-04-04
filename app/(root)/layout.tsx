
import HomeNavbar from '@/components/shared/header/home-navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
 
      <HomeNavbar />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 wrapper relative z-10">{children}</main>
      </div>

    </div>
  );
}
