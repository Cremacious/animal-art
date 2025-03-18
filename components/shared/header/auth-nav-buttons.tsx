import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

const AuthNavButtons = async () => {
  const session = await auth();

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    );
  }

  return (
    <>
      <Button asChild>
        <Link href="/profile">Profile</Link>
      </Button>
      <Button asChild onClick={signOutUser}>
        Sign Out
      </Button>
    </>
  );
};

export default AuthNavButtons;
