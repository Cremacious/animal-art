'use server';

import { calcPrice, convertToPlainObject, formatError } from '../utils';
import { cartItemSchema, insertCartSchema } from '../validators';

import { CartItem } from '@/types';
import { Prisma } from '@prisma/client';
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

    if (!cart) {
      const newCart = insertCartSchema.parse({
        userId: userId,
        items: [item],
        sessionCartId: sessionCartId,
        ...calcPrice([item]),
      });

      await prisma.cart.create({ data: newCart });

      revalidatePath(`/product/${product.slug}`);
      return { success: true, message: `${product.name} added to cart ` };
    } else {
      const itemExists = (cart.items as CartItem[]).find(
        (x) => x.productId === item.productId
      );
      if (itemExists) {
        if (product.stock < itemExists.quantity + 1) {
          throw new Error('Not enough stock');
        }
        (cart.items as CartItem[]).find(
          (x) => x.productId === item.productId
        )!.quantity = itemExists.quantity + 1;
      } else {
        if (product.stock < 1) {
          throw new Error('Not enough stock');
        }
        cart.items.push(item);
      }
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: cart.items as Prisma.CartUpdateitemsInput[],
          ...calcPrice(cart.items as CartItem[]),
        },
      });
      revalidatePath(`/product/${product.slug}`);
      return {
        success: true,
        message: `${product.name} ${
          itemExists ? 'quantity updated' : 'added to cart'
        }`,
      };
    }
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
  return convertToPlainObject({
    ...cart,
    items: cart.items as CartItem[],
    itemsPrice: cart.itemsPrice.toString(),
    totalPrice: cart.totalPrice.toString(),
    shippingPrice: cart.shippingPrice.toString(),
    taxPrice: cart.taxPrice.toString(),
  });
}
