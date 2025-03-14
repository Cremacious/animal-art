import { z } from 'zod';
import { formatNumberWithDecimal } from '@/lib/utils';

// Make sure price is formatted with two decimal places
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Price must have exactly two decimal places (e.g., 49.99)'
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  slug: z.string().min(3, 'Slug must be at least 3 characters long'),
  animalType: z
    .string()
    .min(3, 'Animal Type must be at least 3 characters long'),
  images: z.array(z.string()),
  size: z.string().min(3, 'Size must be at least 3 characters long'),
  description: z
    .string()
    .min(3, 'Description must be at least 3 characters long'),
  stock: z.number().int().positive(),
  price: currency,
  isFeatured: z.boolean(),
});
