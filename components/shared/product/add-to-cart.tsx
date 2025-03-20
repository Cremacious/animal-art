'use client';

import { Button } from '@/components/ui/button';
import { CartItem } from '@/types';
import { Plus } from 'lucide-react';
import { addItemToCart } from '@/lib/actions/cart.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);
    if (!res.success) {
      return toast.error(res.message);
    }
    toast.success(`${item.name} added to cart`, {
      action: {
        label: 'View Cart',
        onClick: () => {
          router.push('/cart');
        },
      },
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add to cart
    </Button>
  );
};

export default AddToCart;
