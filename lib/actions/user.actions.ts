'use server';

import { auth, signIn, signOut } from '@/auth';
import {
  shippingAddressSchema,
  signInFormSchema,
  signUpFormSchema,
} from '../validators';

import { ShippingAddress } from '@/types';
import { formatError } from '../utils';
import { hashSync } from 'bcrypt-ts-edge';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { prisma } from '@/db/prisma';
import { redirect } from 'next/navigation';

export async function signUp(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      confirmPassword: formData.get('confirmPassword'),
      password: formData.get('password'),
    });
    const plainPassword = user.password;
    user.password = hashSync(user.password, 10);
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    await signIn('credentials', {
      email: user.email,
      password: plainPassword,
    });
    return { success: true, message: 'User created successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
}

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    await signIn('credentials', user);
    return {
      success: true,
      message: 'Sign in successful',
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: 'Invalid email or password',
    };
  }
}

export async function signOutUser() {
  await signOut();
}

export async function getUserById(userId: string) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

export async function updateUserAddress(data: ShippingAddress) {
  try {
    const session = await auth();
    const currentUser = await prisma.user.findFirst({
      where: { id: session?.user?.id },
    });
    if (!currentUser) throw new Error('User not found.');
    const address = shippingAddressSchema.parse(data);
    await prisma.user.update({
      where: { id: currentUser.id },
      data: { address },
    });

    return { success: true, message: 'Address updated successfully' };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
