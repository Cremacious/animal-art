import { Metadata } from 'next';
import { Ship } from 'lucide-react';
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
  
    if (!cart || cart.items.length === 0) {
      redirect('/cart');
    }
    const session = await auth();
    const userId = session?.user?.id;
  
    if (!userId) throw new Error('User not found');
  
    const user = await getUserById(userId);

    if (!('address' in user)) {
      throw new Error('User address not found');
    }
  
    return (
        <>
          <ShippingAddressForm address={user.address as ShippingAddress} />
        </>
    );
  };
  
  export default ShippingAddressPage;