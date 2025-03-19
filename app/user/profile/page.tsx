import { Input } from '@/components/ui/input';
import ProfileForm from './profile-form';
import { auth } from '@/auth';

const ProfilePage = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <div className="flex justify-center mx-auto">
        <div className="grid grid-cols-2 bg-white">
          <div className="border-amber-900 bg-green-200 md:w-1/2 m-4">
            <h2>Profile</h2>
            <ProfileForm />
          </div>
          <div className="border-amber-900 bg-blue-200 md:w-1/2 m-4">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
