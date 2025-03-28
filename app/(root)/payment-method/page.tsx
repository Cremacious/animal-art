import { Metadata } from 'next';
import PaymentMethodForm from './payment-method-form';
import { auth } from '@/auth';
import { getUserById } from '@/lib/actions/user.actions';

export const metadata: Metadata = {
  title: 'Payment Method',
};

const PaymentMethodPage = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error('User ID not found');
  }

  const user = await getUserById(userId);

  return (
    <>
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
};

export default PaymentMethodPage;
