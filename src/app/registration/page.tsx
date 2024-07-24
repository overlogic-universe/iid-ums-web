"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NavigationMenuBar } from "@/components/navigation-menu-bar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InsertRegistrationType } from "@/schema/schema";
import { insertRegistrationAction } from "@/lib/action";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { TextConstants } from "@/constants/text-constants";
import { ZodConstants } from "@/constants/zod-constants";

const formSchema = ZodConstants.formSchema;

export default function Registration() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ZodConstants.formDefaulValue,
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await insertRegistrationAction(values);
      form.reset();
      toast({
        title: TextConstants.en.registrationSuccessTitle,
        description: TextConstants.en.registrationSucessDescription,
        action: (
          <ToastAction altText="Close">TextConstants.en.close</ToastAction>
        ),
      });
    } catch (error) {
      toast({
        title: TextConstants.en.registrationFailedTitle,
        description: TextConstants.en.registrationFailedDescription,
        action: (
          <ToastAction altText="Close">TextConstants.en.close</ToastAction>
        ),
      });
    }
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {Object.keys(formSchema.shape).map((key) => (
              <FormField
                key={key}
                control={form.control}
                name={key as keyof z.infer<typeof formSchema>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={key} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit">{TextConstants.en.submit}</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
