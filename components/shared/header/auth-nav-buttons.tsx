import { Button } from '@/components/ui/button';
import { auth } from '@/auth';
import { signOutUser } from '@/lib/actions/user.actions';

const AuthNavButtons = async () => {
  const session = await auth();

  if (!session) {
    console.log('Not signed in');
  }

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <>
      Auth
      <Button onClick={handleSignOut}>Sign Out</Button>
    </>
  );
};

export default AuthNavButtons;
