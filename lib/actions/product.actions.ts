'use server';

import {
  convertProductPriceToString,
  convertToPlainObject,
  formatError,
} from '../utils';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  });
  const products = data.map(convertProductPriceToString);

  return convertToPlainObject(products);
}

export async function getProductById(productId: string) {
  const data = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });
  return convertToPlainObject(data);
}

export async function getProductBySlug(productSlug: string) {
  const data = await prisma.product.findFirst({
    where: {
      slug: productSlug,
    },
  });
  return convertToPlainObject(data);
}

export async function getAllTypes() {
  const data = await prisma.product.groupBy({
    by: ['animalType'],
  });

  return data;
}

export async function getAllSizes() {
  const data = await prisma.product.groupBy({
    by: ['size'],
  });

  return data;
}

export async function getAllPrices() {
  const data = await prisma.product.groupBy({
    by: ['price'],
  });

  return data;
}

export async function getAllProducts({
  animalType,
  size,
  price,
  page,
  limit = 10,
}: {
  animalType?: string;
  size?: string;
  price?: string;
  page: number;
  limit?: number;
}) {
  const animalTypeFilter =
    animalType && animalType !== 'all' ? { animalType } : {};
  const sizeFilter = size && size !== 'all' ? { size } : {};
  const priceFilter =
    price && price !== 'all'
      ? {
          price: {
            gte: Number(price.split('-')[0]),
            lte: Number(price.split('-')[1]),
          },
        }
      : {};

  const data = await prisma.product.findMany({
    where: {
      ...animalTypeFilter,
      ...sizeFilter,
      ...priceFilter,
    }, // TODO: Add Sorting
  });
  const dataCount = await prisma.product.count();

  return {
    data,
    totalPages: Math.ceil(dataCount / limit),
  };
}

export async function deleteProduct(id: string) {
  try {
    const productExists = await prisma.product.findFirst({
      where: { id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.product.delete({ where: { id } });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
