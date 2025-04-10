import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import SidebarAuthMenu from './sidebar-auth-menu';
import UserMenu from './user-menu';
import logo from '@/public/images/newLogo.jpg';

const HomeNavbar = () => {
  return (
    <>
      <header className=" mb-4 flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
          <Link
            href="javascript:void(0)"
            className="hidden sm:flex items-center space-x-2"
          >
            <Image src={logo} alt="logo" className="w-10 rounded-full" />
            <div>Animal Art</div>
          </Link>
          <Link href="/" className="flex sm:hidden items-center space-x-2">
            <Image src={logo} alt="logo" className="w-10 rounded-full" />
            <div>Animal Art</div>
          </Link>
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="/"
                  className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="/search"
                  className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                >
                  Gallery
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                >
                  Blog
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                >
                  About
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center max-lg:ml-auto space-x-4">
            {/* <AuthMenu /> */}
            <Link href="/cart">
              <Button variant="outline">
                <ShoppingCart className="mr-2" />
                Cart
              </Button>
            </Link>
            <div className="hidden md:block">
              <UserMenu />
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="mr-2" variant="outline" size="icon">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center space-x-2">
                        <Image
                          src={logo}
                          alt="logo"
                          className="w-10 rounded-full"
                        />
                        <div>Animal Art</div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4 text-center">
                    <SidebarAuthMenu />
                    <ul>
                      <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link
                          href="/"
                          className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link
                          href="/search"
                          className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link
                          href="javascript:void(0)"
                          className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="max-lg:border-b max-lg:py-3 px-3">
                        <Link
                          href="javascript:void(0)"
                          className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                        >
                          About
                        </Link>
                      </li>
                      <li className="max-lg:border-b max-lg:py-3 px-3">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-700 text-slate-900 font-medium block text-base"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeNavbar;

{
  /* 
  <Link
href="javascript:void(0)"
className="hidden sm:flex items-center space-x-2"
>
<Image src={logo} alt="logo" className="w-10 rounded-full" />
<div>Animal Art</div>
</Link>
<Link href="/" className="flex sm:hidden items-center space-x-2">
<Image src={logo} alt="logo" className="w-10 rounded-full" />
<div>Animal Art</div>
</Link> */
}
