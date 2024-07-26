"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { NextPage } from "next";

const formSchema = ZodConstants.formSchema;
import Link from "next/link";
import FileUpload from "@/components/registraion/file-upload/file-upload";

interface Props {
  params: {
    page: string;
  };
}

const Page: NextPage<Props> = ({ params }) => {
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
  const currentPage = parseInt(params.page);
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="absolute top-0 right-0 ">
          <p className="p-2 text-main font-light">{currentPage ?? 1}/13</p>
        </div>
      </div>
      <div className="relative h-full w-full px-28">
        <div className="w-full absolute bottom-0 right-0 flex items-center justify-between pb-5 px-28">
          <Link href={`/registration/${currentPage - 1}`}>
            {currentPage == 1 ? null : (
              <Button
                className="border-2 border-black w-40 rounded-xl h-14"
                variant={"outline"}
              >
                Back
              </Button>
            )}
          </Link>
          <Link href={`/registration/${currentPage + 1}`}>
            <Button className="w-40 rounded-xl h-14">Next</Button>
          </Link>
        </div>
        <p className="rows-span-1 text-main-600 font-bold text-2xl pt-4 text-center underline">
          Registration Form
        </p>
        <div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 h-full"
              >
                {Object.keys(formSchema.shape).map((key, index) => {
                  const label = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());
                  const formLocation = currentPage * 3;
                  if (
                    index >= formLocation - 3 &&
                    index < formLocation &&
                    index < 11
                  ) {
                    return (
                      <FormField
                        key={key}
                        control={form.control}
                        name={key as keyof z.infer<typeof formSchema>}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                              <Input
                                className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main focus:outline-none focus-visible:ring-main"
                                placeholder={label}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  }
                })}
                {/* <Button type="submit">{TextConstants.en.submit}</Button> */}
                {currentPage == 5 ? <FileUpload/> : null}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
