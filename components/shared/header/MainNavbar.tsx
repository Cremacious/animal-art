import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';
import newLogo from '@/public/images/newLogo.jpg';
import { signOutUser } from '@/lib/actions/user.actions';

const MainNavbar = () => {
  return (
    <>
      <nav className="bg-white mb-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <Image
                src={newLogo}
                alt="Logo"
                className="cursor-pointer rounded-full"
                height={60}
              />
            </Link>
          </div>

          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-400">
              Home
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-teal-400">
              Gallery
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-teal-400"
            >
              Commission
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-400">
              About
            </Link>
          </div>
          {/* Sign In / Sign Up */}
          <div className="md:flex space-x-4">
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
