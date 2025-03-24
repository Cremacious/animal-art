import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

const AuthMenu = async () => {
  const session = await auth();

  if (!session) {
    return (
      <>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-in">New sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/sign-up">new sign up</Link>
          </Button>
        </div>
      </>
    );
  }
  return (
    <div className="flex gap-2 items-center">
      <form action={signOutUser} className="w-full">
        <Button className="w-full py-4 px-2 h-4 justify-start" variant="ghost">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default AuthMenu;
