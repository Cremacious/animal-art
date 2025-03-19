import Link from 'next/link';
import Menu from './menu';

const MainNavbar = () => {
  return (
    <>
      <nav className="bg-white mb-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              {/* <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            /> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-400">
              About
            </Link>
          </div>
          {/* <AuthNavButtons /> */}
          {/* Sign In / Sign Up */}
          <div className="hidden md:flex space-x-4">
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
