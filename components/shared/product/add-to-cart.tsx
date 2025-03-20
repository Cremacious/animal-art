'use client';

import { Cart, CartItem } from '@/types';
import { Minus, Plus } from 'lucide-react';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const AddToCart = ({ item, cart }: { item: CartItem; cart?: Cart }) => {
  const router = useRouter();
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);
    if (!res.success) {
      return toast.error(res.message);
    }
    toast.success(res.message, {
      action: {
        label: 'View Cart',
        onClick: () => {
          router.push('/cart');
        },
      },
    });
  };

  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);
    if (!res.success) return toast.error(res.message);
    toast.success(res.message);
  };

  return existItem ? (
    <div className="flex flex-row">
      <Button variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="w-4 h-4" />
      </Button>
      {/* <div className="w-1/2">
        <p>In Cart: {existItem.quantity}</p>
      </div> */}
      <span className="px-2 items-center h-16">
        In Cart: {existItem.quantity}
      </span>
      <Button onClick={handleAddToCart}>
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-1/2" onClick={handleAddToCart}>
      <Plus className="w-4 h-4" />
      Add to cart
    </Button>
  );
};

export default AddToCart;
