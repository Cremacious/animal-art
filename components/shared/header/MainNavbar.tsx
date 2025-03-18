import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
          <Link href="/resources" className="text-gray-700 hover:text-blue-600">
            Resources
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>

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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-4 px-4 py-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/search"
              className="block text-gray-700 hover:text-blue-600"
            >
              Gallery
            </Link>
            <Link
              href="/resources"
              className="block text-gray-700 hover:text-blue-600"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/sign-in"
              className="block text-gray-700 hover:text-blue-600"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;
