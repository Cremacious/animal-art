import { Order, ShippingAddress } from '@/types';
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import {
  approvePayPalOrder,
  createPayPalOrder,
} from '@/lib/actions/order.actions';

import { toast } from 'sonner';

const OrderDetailsTable = ({
  order,
  paypalClientId,
  isAdmin,
}: {
  order: Order;
  paypalClientId: string;
  isAdmin: boolean;
}) => {
  const {
    id,
    shippingAddress,
    orderItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    paymentMethod,
    isDelivered,
    isPaid,
    paidAt,
    deliveredAt,
  } = order;

  function PrintLoadingState() {
    const [{ isPending, isRejected }] = usePayPalScriptReducer();
    let status = '';
    if (isPending) {
      status = 'Loading PayPal...';
    } else if (isRejected) {
      status = 'Error in loading PayPal.';
    }
    return status;
  }

  const handleCreatePayPalOrder = async () => {
    const res = await createPayPalOrder(order.id);
    if (!res.success) return toast(res.message);
    return res.data;
  };

  const handleApprovePayPalOrder = async (data: { orderID: string }) => {
    const res = await approvePayPalOrder(order.id, data);
    toast(res.message);
  };

  return (
    <>
      Order details table
      {!isPaid && paymentMethod === 'PayPal' && (
        <div>
          <PayPalScriptProvider options={{ clientId: paypalClientId }}>
            <PrintLoadingState />
            <PayPalButtons
              createOrder={handleCreatePayPalOrder}
              onApprove={handleApprovePayPalOrder}
            />
          </PayPalScriptProvider>
        </div>
      )}
    </>
  );
};

export default OrderDetailsTable;
