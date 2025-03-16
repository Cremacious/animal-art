import Link from 'next/link';

// TODO: Create a header component that displays the site name and navigation links

const Header = () => {
  return (
    <nav className="bg-teal-600 w-full">
      <div className="flex flex-row">
        <h1 className="text-white">Animal Art</h1>
        <Link className="ml-2" href="/">
          Home
        </Link>
        <Link className="ml-2" href="/search">
          Gallery
        </Link>
        <Link className="ml-2" href="/">
          About
        </Link>
        <Link className="ml-2" href="/">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
