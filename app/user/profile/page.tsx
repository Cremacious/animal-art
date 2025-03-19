import { auth } from '@/auth';

const ProfilePage = async () => {
  const session = await auth();
  console.log(session);

  return <>Profile Page x{session?.user?.email}</>;
};

export default ProfilePage;
