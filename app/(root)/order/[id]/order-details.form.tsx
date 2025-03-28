import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import {
  approvePayPalOrder,
  createPayPalOrder,
} from '@/lib/actions/order.actions';

const OrderDetailsForm = () => {
  return (
    <></>
    // <OrderDetailsTable
    //   order={{
    //     ...order,
    //     shippingAddress: order.shippingAddress as ShippingAddress,
    //   }}
    //   paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
    // />
  );
};

export default OrderDetailsForm;
