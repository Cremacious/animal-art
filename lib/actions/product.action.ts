'use server';
import { PrismaClient } from '@prisma/client';
import { convertToPlainObject } from '../utils';

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  });
  return convertToPlainObject(data);
}

export async function getAllProducts() {
  const prisma = new PrismaClient();
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
