'use server';

import { calcPrice, convertProductPriceToString, formatError } from '../utils';
import { cartItemSchema, insertCartSchema } from '../validators';

import { CartItem } from '@/types';
import { auth } from '@/auth';
import { cookies } from 'next/headers';
import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';

export async function addItemToCart(data: CartItem) {
  try {
    const sessionCartId = (await cookies()).get('sessionCartId')?.value;
    if (!sessionCartId) {
      throw new Error('Session cart id not found');
    }
    const session = await auth();
    const userId = session?.user?.id ? (session.user.id as string) : undefined;
    const cart = await getMyCart();
    const item = cartItemSchema.parse(data);
    const product = await prisma.product.findFirst({
      where: { id: item.productId },
    });
    if (!product) {
      throw new Error('Product not found');
    }
    console.log('product', product);
    if (!cart) {
      const newCart = insertCartSchema.parse({
        userId: userId,
        items: [item],
        sessionCartId: sessionCartId,
        ...calcPrice([item]),
      });
      await prisma.cart.create({
        data: newCart,
      });
      revalidatePath(`/product/${product.slug}`);

      return {
        success: true,
        message: 'Item added to cart successfully',
      };
    }

    return { success: true, message: 'Item added to cart' };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function getMyCart() {
  const sessionCartId = (await cookies()).get('sessionCartId')?.value;
  if (!sessionCartId) return undefined;
  const session = await auth();
  const userId = session?.user?.id;
  const cart = await prisma.cart.findFirst({
    where: userId ? { userId: userId } : { sessionCartId: sessionCartId },
  });
  if (!cart) return undefined;
  return convertProductPriceToString({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
  });
}
