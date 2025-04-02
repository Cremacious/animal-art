'use client';

import { Loader, Minus, Plus } from 'lucide-react';
import {
  addItemToCart,
  removeItemFromCart,
  removeProductTypeFromCart,
} from '@/lib/actions/cart.actions';

import { Button } from '@/components/ui/button';
import { Cart } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import PaymentTotalCard from '@/components/shared/payment-total-card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {!cart || cart.items.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <div className="text-center">
            Cart is empty.{' '}
            <Link href="/search" className="text-blue-500">
              Go shopping.
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-5xl max-md:max-w-xl mx-auto p-2 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-10 mt-8 items-start">
            <div className="md:col-span-2 space-y-4 justify-center mx-auto">
              {/* Product cards */}
              {cart.items.map((item, key) => (
                <div
                  key={key}
                  className="flex gap-4 w-full bg-white px-4 py-6 rounded-md shadow-lg mx-auto"
                >
                  <div className="flex gap-4">
                    <div className="aspect-square relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                          {item.name}
                        </h3>
                      </div>
                      <div className="mt-auto flex items-center gap-3">
                        {/* Button */}
                        <Button
                          disabled={isPending}
                          variant="outline"
                          type="button"
                          onClick={() =>
                            startTransition(async () => {
                              const res = await removeItemFromCart(
                                item.productId
                              );
                              if (!res.success) {
                                toast.error(res.message);
                              }
                            })
                          }
                        >
                          {isPending ? (
                            <Loader className="w-4 h-4  animate-spin" />
                          ) : (
                            <Minus className="w-4 h-4" />
                          )}
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          disabled={isPending}
                          variant="outline"
                          type="button"
                          onClick={() =>
                            startTransition(async () => {
                              const res = await addItemToCart(item);
                              if (!res.success) {
                                toast.error(res.message);
                              }
                            })
                          }
                        >
                          {isPending ? (
                            <Loader className="w-4 h-4  animate-spin" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto flex flex-col">
                    <div className="flex items-start gap-2 justify-end">
                      {/* Trashcan */}
                      <Button
                        disabled={isPending}
                        variant="outline"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await removeProductTypeFromCart(
                              item.productId
                            );
                            if (!res.success) {
                              toast.error(res.message);
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4  animate-spin" />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"
                            />
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"
                            />
                          </svg>
                        )}
                      </Button>
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1 text-slate-900 mt-auto">
                      ${item.price} x {item.quantity}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <PaymentTotalCard cart={cart} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartTable;

// <div className="grid md:grid-cols-4 md:gap-5">
//   <div className="overflow-x-auto md:col-span-3">
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Item</TableHead>
//           <TableHead className="text-center">Quantity</TableHead>
//           <TableHead className="text-right">Price</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {cart.items.map((item) => (
//           <TableRow key={item.slug}>
//             {/* Item and Name */}
//             <TableCell>
//               <Link
//                 href={`/product/${item.slug}`}
//                 className="flex items-center"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={50}
//                   height={50}
//                 ></Image>
//                 <span className="px-2">{item.name}</span>
//               </Link>
//             </TableCell>
//             {/* Quantity */}
//             <TableCell className="flex-center gap-2">
//               <Button
//                 disabled={isPending}
//                 variant="outline"
//                 type="button"
//                 onClick={() =>
//                   startTransition(async () => {
//                     const res = await removeItemFromCart(
//                       item.productId
//                     );
//                     if (!res.success) {
//                       toast.error(res.message);
//                     }
//                   })
//                 }
//               >
//                 {isPending ? (
//                   <Loader className="w-4 h-4  animate-spin" />
//                 ) : (
//                   <Minus className="w-4 h-4" />
//                 )}
//               </Button>
//               <span>{item.quantity}</span>
//               <Button
//                 disabled={isPending}
//                 variant="outline"
//                 type="button"
//                 onClick={() =>
//                   startTransition(async () => {
//                     const res = await addItemToCart(item);
//                     if (!res.success) {
//                       toast.error(res.message);
//                     }
//                   })
//                 }
//               >
//                 {isPending ? (
//                   <Loader className="w-4 h-4  animate-spin" />
//                 ) : (
//                   <Plus className="w-4 h-4" />
//                 )}
//               </Button>
//             </TableCell>
//             {/* Price */}
//             <TableCell className="text-right">
//               ${item.price} x {item.quantity}
//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </div>
//   <Card>
//     <CardContent className="p-4 gap-4">
//       <div className="pb-3 text-xl">
//         Subtotal ({cart.items.reduce((a, c) => a + c.quantity, 0)}):
//         <span className="font-bold">
//           {' '}
//           {formatCurrency(cart.itemsPrice)}
//         </span>
//       </div>
//       <Button
//         onClick={() =>
//           startTransition(() => router.push('/shipping-address'))
//         }
//         className="w-full"
//         disabled={isPending}
//       >
//         {isPending ? (
//           <Loader className="animate-spin w-4 h-4" />
//         ) : (
//           <ArrowRight className="w-4 h-4" />
//         )}
//         Proceed to Checkout
//       </Button>
//     </CardContent>
//   </Card>
// </div>
