import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useTransition } from 'react';
import { formatCurrency } from '@/lib/utils';
import { Cart } from '@/types';
import { ArrowRight, Loader } from 'lucide-react';

const PaymentTotalCard = ({ cart }: { cart: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
        <ul className="text-slate-900 font-medium space-y-4">
          <li className="flex flex-wrap gap-4 text-sm">
            Subtotal{' '}
            <span className="ml-auto font-semibold">
              {formatCurrency(cart.itemsPrice)}
            </span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm">
            Shipping{' '}
            <span className="ml-auto font-semibold">${cart.shippingPrice}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm">
            Tax <span className="ml-auto font-semibold">${cart.taxPrice}</span>
          </li>
          <hr className="border-slate-300" />
          <li className="flex flex-wrap gap-4 text-sm font-semibold">
            Total <span className="ml-auto">${cart.totalPrice}</span>
          </li>
        </ul>
        <div className="mt-8 space-y-2">
          <Button
            onClick={() =>
              startTransition(() => router.push('/shipping-address'))
            }
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md"
            disabled={isPending}
          >
            {isPending ? (
              <Loader className="animate-spin w-4 h-4" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
            Proceed to Checkout
          </Button>

          <Button
            onClick={() => router.push('/search')}
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-md"
          >
            Continue Shopping
          </Button>
        </div>
        {/* <div className="mt-4 flex flex-wrap justify-center gap-4">
          <img
            src="https://readymadeui.com/images/master.webp"
            alt="card1"
            className="w-10 object-contain"
          />
          <img
            src="https://readymadeui.com/images/visa.webp"
            alt="card2"
            className="w-10 object-contain"
          />
          <img
            src="https://readymadeui.com/images/american-express.webp"
            alt="card3"
            className="w-10 object-contain"
          />
        </div> */}
      </div>
    </>
  );
};

export default PaymentTotalCard;
