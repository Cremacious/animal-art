'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { RadioGroup } from '@/components/ui/radio-group';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';

const PaymentMethodForm = () => {
  //   const form = useForm<z.infer<typeof paymentMethodSchema>>({
  //     resolver: zodResolver(paymentMethodSchema),
  //     defaultValues: {
  //       type: preferredPaymentMethod || DEFAULT_PAYMENT_METHOD,
  //     },
  //   });

  //   async function onSubmit(values: z.infer<typeof paymentMethodSchema>) {
  //     startTransition(async () => {
  //       const res = await updateUserPaymentMethod(values);

  //       if (!res.success) {
  //         toast({
  //           variant: 'destructive',
  //           description: res.message,
  //         });

  //         return;
  //       }

  //       router.push('/place-order');
  //     });
  //   }

  return (
    <>
      {/* <div className="max-w-md mx-auto">
        <Form {...form}>
          <form
            method="post"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <h1 className="h2-bold mt-4">Payment Method</h1>
            <p className="text-sm text-muted-foreground">
              Please select your preferred payment method
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        className="flex flex-col space-y-2"
                      > */}
      {/* {PAYMENT_METHODS.map((paymentMethod) => (
                          <FormItem
                            key={paymentMethod}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={paymentMethod}
                                checked={field.value === paymentMethod}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {paymentMethod}
                            </FormLabel>
                          </FormItem>
                        ))} */}
      {/* </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <Loader className="animate-spin w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div> */}
    </>
  );
};

export default PaymentMethodForm;
