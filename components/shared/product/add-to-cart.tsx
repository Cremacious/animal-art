'use client';

import { Cart, CartItem } from '@/types';
import { Loader, Minus, Plus } from 'lucide-react';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const AddToCart = ({ item, cart }: { item: CartItem; cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);
    if (!res.success) {
      toast.error(res.message);
      return;
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

    return;
  };

  return existItem ? (
    <div className="w-full flex flex-row">
      <Button variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="w-4 h-4" />
      </Button>
      <Button variant="ghost" className="mx-2">
        {item.quantity}
      </Button>

      <Button onClick={handleAddToCart}>
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-full" onClick={handleAddToCart}>
      <Plus className="w-4 h-4" />
      Add to cart
    </Button>
  );
};

export default AddToCart;
