'use client';

import { Check, Loader } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { createOrder } from '@/lib/actions/order.actions';
import { toast } from 'sonner';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';

const PlaceOrderForm = () => {
  const router = useRouter();

  const PlaceOrderButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full">
        {pending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Check className="w-4 h-4" />
        )}{' '}
        Continue To Payment
      </Button>
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await createOrder();
    toast.success(res.message);
    if (res.redirectTo) {
      router.push(res.redirectTo);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <PlaceOrderButton />
    </form>
  );
};

export default PlaceOrderForm;
