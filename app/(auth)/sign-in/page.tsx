import SignInForm from './sign-in-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {

  const session = await auth();
  
    if (session) {
      return redirect('/');
    }
  
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
