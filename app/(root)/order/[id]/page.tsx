import { getUserAddress, getUserRole } from '@/lib/actions/user.actions';

import OrderDetailsTable from './order-details-table';
import { ShippingAddress } from '@/types';
import { auth } from '@/auth';
import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Order Details',
};

const OrderDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const order = await getOrderById(id);
  if (!order) notFound();

  const session = await auth();

  const userAddress = (await getUserAddress(order.userId)) as ShippingAddress;

  const formattedAddress: ShippingAddress = {
    fullName: userAddress?.fullName || '',
    streetAddress: userAddress?.streetAddress || '',
    city: userAddress?.city || '',
    postalCode: userAddress?.postalCode || '',
    country: userAddress?.country || '',
    lat: userAddress?.lat,
    lng: userAddress?.lng,
  };

  const user = session?.user?.id ? await getUserRole(session.user.id) : null;
  return (
    <div className="p-2">
      <div className="container p-2 md:p-10 mx-auto bg-teal-100 rounded-2xl shadow-2xl border-6 border-white">
        <OrderDetailsTable
          order={{
            ...order,
            shippingAddress: formattedAddress, 
            itemsPrice: order.itemsPrice.toString(),
            shippingPrice: order.shippingPrice.toString(),
            taxPrice: order.taxPrice.toString(),
            totalPrice: order.totalPrice.toString(),
            orderItems: order.orderItems.map((item) => ({
              ...item,
              price: item.price.toString(),
            })),
          }}
          paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
          isAdmin={user?.role === 'admin' || false}
        />
      </div>
    </div>
  );
};

export default OrderDetailsPage;


