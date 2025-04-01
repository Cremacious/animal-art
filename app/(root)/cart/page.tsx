import CartTable from './cart-table';
import { getMyCart } from '@/lib/actions/cart.actions';

export const metadata = {
  title: 'Shopping Cart',
};

const CartPage = async () => {
  const cart = await getMyCart();

  return (
    <div className="p-2">
      <div className="container mx-auto p-2 bg-white rounded-2xl">
        <CartTable cart={cart} />
      </div>
    </div>
  );
};

export default CartPage;
