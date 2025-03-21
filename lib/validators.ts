import { formatNumberWithDecimal } from '@/lib/utils';
import { z } from 'zod';

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

export const cartItemSchema = z.object({
  productId: z.string().min(3, 'Product ID must be at least 3 characters long'),
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  slug: z.string().min(3, 'Slug must be at least 3 characters long'),
  price: currency,
  image: z.string().min(1, 'Image must be at least 1 character long'),
  quantity: z.number().int().positive(),
});

export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: currency,
  totalPrice: currency,
  shippingPrice: currency,
  taxPrice: currency,
  sessionCartId: z
    .string()
    .min(3, 'Session Cart ID must be at least 3 characters long'),
  userId: z.string().optional().nullable(),
});

export const signInFormSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(3, 'Email must be at least 3 characters'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
});

export const shippingAddressSchema = z.object({
  fullName: z.string().min(3, 'Full Name must be at least 3 characters long'),
  streetAddress: z
    .string()
    .min(3, 'Street Address must be at least 3 characters long'),
  city: z.string().min(3, 'City must be at least 3 characters long'),
  state: z.string().min(1, 'State must be at least 1 character long'),
  zipCode: z.string().min(3, 'Zip Code must be at least 3 characters long'),
  country: z.string().min(3, 'Country must be at least 3 characters long'),
});

