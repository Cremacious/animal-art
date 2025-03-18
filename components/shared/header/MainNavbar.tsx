import AuthNavButtons from './auth-nav-buttons';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
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
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-blue-600">
              Gallery
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-blue-600"
            >
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>
          <AuthNavButtons />
          {/* Sign In / Sign Up */}
          <div className="hidden md:flex space-x-4">
            <Link href="/sign-in" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
