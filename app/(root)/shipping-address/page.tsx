import CheckoutSteps from '@/components/shared/checkout-steps';
import { Metadata } from 'next';
import { ShippingAddress } from '@/types';
import ShippingAddressForm from './shipping-address-form';
import { auth } from '@/auth';
import { getMyCart } from '@/lib/actions/cart.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Shipping Address',
};

const ShippingAddressPage = async () => {
  const cart = await getMyCart();

  if (!cart || cart.items.length === 0) redirect('/cart');

  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error('No user ID');

  const user = await getUserById(userId);

  return (
    <div className="p-4">
      <div className=" bg-white border-6 border-teal-100 container mx-auto flex justify-center py-10 rounded-2xl shadow-2xl min-h-screen">
        <ShippingAddressForm address={user.address as ShippingAddress} />
      </div>
    </div>
  );
};

export default ShippingAddressPage;
