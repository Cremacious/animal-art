'use server';
import { PrismaClient } from '@prisma/client';
import { convertToPlainObject, convertProductPriceToString } from '../utils';

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  });
  const products = data.map(convertProductPriceToString);

  return convertToPlainObject(products);
}

export async function getAllProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany();
  const products = data.map(convertProductPriceToString);
  return convertToPlainObject(products);
}

export async function getProductById(productId: string) {
  const prisma = new PrismaClient();
  const data = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });
  return convertToPlainObject(data);
}

export async function getProductBySlug(productSlug: string) {
  const prisma = new PrismaClient();
  const data = await prisma.product.findFirst({
    where: {
      slug: productSlug,
    },
  });
  return convertToPlainObject(data);
}
