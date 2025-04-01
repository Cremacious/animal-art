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
import SidebarAuthMenu from '@/components/shared/header/sidebar-auth-menu';
import UserMenu from '../../components/shared/header/user-menu';
import logo from '@/public/images/newLogo.jpg';

const UserNavbar = () => {
  return (
    <>
      <header className="mb-4 border-b-4 border-teal-300 flex shadow-md py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50">
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
          <div className="hidden lg:block">
            <ul className="flex gap-x-5">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-700 text-blue-700 font-medium text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/user/profile"
                  className="hover:text-blue-700 text-slate-900 font-medium text-base"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/user/orders"
                  className="hover:text-blue-700 text-slate-900 font-medium text-base"
                >
                  Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <button className="border border-gray-300 rounded px-4 py-2 flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </button>
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
                          className="hover:text-blue-700 text-blue-700 font-medium block text-base"
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

export default UserNavbar;
