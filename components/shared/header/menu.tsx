import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserIcon } from 'lucide-react';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

const Main = async () => {
  const session = await auth();

  if (!session) {
    return (
      <>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">
            <UserIcon /> Sign Up
          </Link>
        </Button>
      </>
    );
  }

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative rounded-lg ml-2 flex items-center justify-center hover:bg-teal-300 bg-teal-200"
            >
              Account Menu
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/user/profile" className="w-full">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/user/orders" className="w-full">
              Order History
            </Link>
          </DropdownMenuItem>
          {/* {session.user?.role === 'admin' && (
            <DropdownMenuItem>
              <Link href="/admin/overview" className="w-full">
                Admin
              </Link>
            </DropdownMenuItem>
          )} */}
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant="ghost"
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Main;
