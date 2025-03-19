'use client';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

const ProfileForm = () => {
  const form = useForm();
  return (
    <>
      {/* <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> */}
    </>
  );
};

export default ProfileForm;
