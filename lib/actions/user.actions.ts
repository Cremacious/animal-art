'use server';

import { signIn, signOut } from '@/auth';

import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signInFormSchema } from '../validators';

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    console.log('formData', formData);
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    console.log('user', user);
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
  console.log('signed out');
  await signOut();
}
