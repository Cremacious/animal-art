import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

const SidebarAuthMenu = async () => {
  const session = await auth();

  if (!session) {
    return (
      <>
        <div className="flex-row py-4 md:flex gap-2">
          <Button
            className=" hover:bg-teal-100 px-4 py-4 rounded-md text-black text-[15px] font-medium flex items-center justify-center gap-2"
            asChild
            variant="outline"
            size="sm"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="">
        <ul>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/user/profile"
              className="hover:text-blue-700 text-blue-700 font-medium block text-base"
            >
              Profile
            </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/user/orders"
              className="hover:text-blue-700 text-blue-700 font-medium block text-base"
            >
              Orders
            </Link>
          </li>
          <li className="max-lg:border-b max-lg:py-3 px-3">
            <Link
              href="/"
              className="hover:text-blue-700 text-blue-700 font-medium block text-base"
            >
              <Button variant="link" onClick={signOutUser}>
                Sign Out
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarAuthMenu;
