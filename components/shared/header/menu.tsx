import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

// Assuming you're using next-auth

// TODO: Add a check for admin role

const Menu = () => {
  const session = auth();

  if (!session) {
    return (
      <>
        <Link href="/sign-in">
          <Button>Sign In?</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </>
    );
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-3 rounded-xl border border-4-black">
          Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex justify-center text-center">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-center items-center">
            <Link href="/user/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            <Link href="/user/profile">
              <Button variant="ghost">Orders</Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            <Button onClick={signOutUser} variant="ghost">
              {' '}
              Sign Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;

// {session.user?.role === 'admin' && (
//   <DropdownMenuItem>
//     <Button onClick={signOutUser} variant="ghost">
//       Admin Sign Out
//     </Button>
//   </DropdownMenuItem>
// )}
