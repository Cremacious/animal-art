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
import { User } from 'next-auth'; // Assuming you're using next-auth
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

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
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/user/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Orders</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>
            <Button onClick={signOutUser} variant="ghost">
              Sign Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Menu; // const session = await auth();

// {session.user?.role === 'admin' && (
//   <DropdownMenuItem>
//     <Button onClick={signOutUser} variant="ghost">
//       Admin Sign Out
//     </Button>
//   </DropdownMenuItem>
// )}
