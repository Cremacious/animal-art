import CartTable from './cart-table';
import { getMyCart } from '@/lib/actions/cart.actions';

export const metadata = {
  title: 'Shopping Cart',
};

const CartPage = async () => {
  const cart = await getMyCart();

  return (
    <div className="p-2">
      <div className="container mx-auto p-2 border-6 border-white bg-teal-100 rounded-2xl mb-4 min-h-[400px]">
        <CartTable cart={cart} />
      </div>
    </div>
  );
};

export default CartPage;
