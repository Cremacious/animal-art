import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import AuthMenu from './auth-menu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import myLogo from '@/public/images/newLogo.jpg';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

export const MainNavbar = ({
  menu = [
    { title: 'Home', url: '#' },
    {
      title: 'Gallery',
      url: '/search',
    },
    {
      title: 'Commission',
      url: '#',
      items: [
        {
          title: 'Request Custom Art',
          description: 'Upload a photo of your pet for a custom painting',
          icon: <Zap className="size-5 shrink-0" />,
          url: '#',
        },
      ],
    },
    {
      title: 'About',
      url: '#',
    },
  ],
  auth = {
    login: { title: 'Login', url: '/sign-in' },
    signup: { title: 'Sign up', url: '#' },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 mb-4 bg-white">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={myLogo}
                alt="Logo"
                className="ml-1 cursor-pointer rounded-full"
                height={60}
              />
              <span className="text-lg font-semibold tracking-tighter">
                Animal Art
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* <Menu /> */}
          <AuthMenu />
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={myLogo}
                alt="Logo"
                className="ml-1 cursor-pointer rounded-full"
                height={60}
              />
              <h1>Animal Art</h1>
            </Link>
            <AuthMenu />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src={myLogo}
                      alt="Logo"
                      className="ml-1 cursor-pointer rounded-full"
                      height={60}
                    />
                    Animal Art
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default MainNavbar;

// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import Link from 'next/link';
// import Menu from './menu';
// import newLogo from '@/public/images/newLogo.jpg';
// import { signOutUser } from '@/lib/actions/user.actions';

// const MainNavbar = () => {
//   return <></>;
// };

// export default MainNavbar;

// <nav className="bg-white mb-2 border-b border-gray-200">
//   <div className="container mx-auto px-4 flex flex-row items-center justify-between h-16">
//     {/* Logo */}
//     <div className="flex flex-row items-center">
//       <Link href="/">
//         <Image
//           src={newLogo}
//           alt="Logo"
//           className="cursor-pointer rounded-full"
//           height={60}
//         />
//       </Link>
//       <h1 className="ml-2">Logo Here</h1>
//     </div>

//     <div className="flex space-x-8">
//       <Link href="/" className="text-gray-700 hover:text-teal-400">
//         Home
//       </Link>
//       <Link href="/search" className="text-gray-700 hover:text-teal-400">
//         Gallery
//       </Link>
//       <Link
//         href="/resources"
//         className="text-gray-700 hover:text-teal-400"
//       >
//         Commission
//       </Link>
//       <Link href="/about" className="text-gray-700 hover:text-teal-400">
//         About
//       </Link>
//     </div>
//     {/* Sign In / Sign Up */}
//     <div className="md:flex space-x-4">
//       <Menu />
//     </div>
//   </div>
// </nav>
