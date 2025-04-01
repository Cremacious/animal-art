import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import UserMenu from './user-menu';
import logo from '@/public/images/newLogo.jpg';

const AdminNavbar = () => {
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
                  href="/admin/overview"
                  className="hover:text-blue-700 text-slate-900 font-medium text-base"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/orders"
                  className="hover:text-blue-700 text-slate-900 font-medium text-base"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users"
                  className="hover:text-blue-700 text-slate-900 font-medium text-base"
                >
                  Users
                </Link>
              </li>
              <li>
                <a
                  href="/admin/products"
                  className="hover:text-blue-700 text-slate-900 font-medium text-base"
                >
                  Products
                </a>
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
              <button className="border border-gray-300 rounded p-2">
                <Menu className="w-5 h-5" />
              </button>
              <div className="absolute top-0 left-0 w-full h-full bg-white shadow-lg p-6 hidden">
                <div className="flex items-center space-x-2 mb-6">
                  <Image src={logo} alt="logo" className="w-10 rounded-full" />
                  <div>Animal Art</div>
                </div>
                <ul className="space-y-4">
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
                      href="/search"
                      className="hover:text-blue-700 text-slate-900 font-medium text-base"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-base"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-base"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:text-blue-700 text-slate-900 font-medium text-base"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AdminNavbar;
