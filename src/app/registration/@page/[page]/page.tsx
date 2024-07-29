"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertRegistrationAction } from "@/lib/action";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { TextConstants } from "@/constants/text-constants";
import { ZodConstants } from "@/constants/zod-constants";
import { NextPage } from "next";

const formSchema = ZodConstants.formSchema;
import Link from "next/link";
import FileUpload from "@/components/registraion/file-upload/file-upload";
import Confirmation from "@/components/registraion/confirmation/confirmation";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import { Textarea } from "@/components/ui/textarea";
import { getCookies, setCookies } from "@/lib/action/cookies/cookie-action";
import { useEffect, useState } from "react";
import FormLoading from "@/components/registraion/form/form-loading";

interface Props {
  params: {
    page: string;
  };
}

const selectContent = {
  0: ["UMS International Invention Competition Batch 1"],
  8: ["3D Design", "4D Design", "8D Design"],
  9: ["Biotechnology", "Lorem Ipsum"],
};

const Page: NextPage<Props> = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ZodConstants.formDefaulValue,
  });

  useEffect(() => {
    const fetchCookies = async () => {
      setLoading(true);
      const cookies = await getCookies();
      if (cookies) {
        cookies.forEach((cookie) => {
          if (Object.keys(form.getValues()).includes(cookie.name)) {
            form.setValue(
              cookie.name as keyof z.infer<typeof formSchema>,
              cookie.value
            );
          }
        });
      }
      setLoading(false);
    };
    fetchCookies();
  }, []);

  const renderInput = (
    index: number,
    label: string,
    key: string,
    { ...field }
  ) => {
    switch (index) {
      case 0:
      case 8:
      case 9:
        return (
          <Select
            {...field}
            onValueChange={(e) => {
              form.setValue(key as keyof z.infer<typeof formSchema>, e);
            }}
          >
            <SelectTrigger className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main focus:outline-none focus-visible:ring-main">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {selectContent[index].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 10:
        return (
          <Textarea
            placeholder={label}
            className="border-2 min-h-64 border-[#9F9F9F] rounded-xl focus:border-main focus:outline-none focus-visible:ring-main"
            {...field}
          />
        );
      default:
        return (
          <Input
            className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main focus:outline-none focus-visible:ring-main"
            placeholder={label}
            {...field}
          />
        );
    }
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await insertRegistrationAction(values);
      form.reset();
      toast({
        title: TextConstants.en.registrationSuccessTitle,
        description: TextConstants.en.registrationSucessDescription,
        action: (
          <ToastAction altText="Close">{TextConstants.en.close}</ToastAction>
        ),
      });
    } catch (error) {
      toast({
        title: TextConstants.en.registrationFailedTitle,
        description: TextConstants.en.registrationFailedDescription,
        action: (
          <ToastAction altText="Close">{TextConstants.en.close}</ToastAction>
        ),
      });
    }
  };
  const currentPage = parseInt(params.page);
  return (
    <div className="w-full h-full relative">
      {loading ? <FormLoading /> : null}

      <div className="relative">
        <div className="absolute top-0 right-0 ">
          <p className="p-2 text-main font-light">{currentPage ?? 1}/13</p>
        </div>
      </div>
      <div className="relative h-full w-full px-28">
        {currentPage >= 1 && currentPage <= 7 ? (
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
            {currentPage == 7 ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-40 rounded-xl h-14">Submit</Button>
                </DialogTrigger>
                <DialogContent className="bg-main-200 border-2 border-white flex items-center justify-center flex-col">
                  <div className="flex justify-center items-center flex-col text-white">
                    <Image
                      src={SvgConstants.warningLineIcon}
                      alt="Warning Line"
                    />
                    <p className="text-4xl">Are you sure ?</p>
                    <p>Data that has been sent cannot be changed</p>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="secondary"
                        className="border-2 rounded-2xl text-red-500 w-32 hover:bg-red-500 hover:bg-opacity-30 border-red-500 bg-transparent"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="button"
                      variant="secondary"
                      className="border-2 rounded-2xl text-white w-32 hover:bg-white hover:bg-opacity-30 border-white bg-transparent"
                    >
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <Link href={`/registration/${currentPage + 1}`}>
                <Button className="w-40 rounded-xl h-14">Next</Button>
              </Link>
            )}
          </div>
        ) : null}

        <p className="rows-span-1 text-main-600 font-bold text-2xl pt-4 text-center underline">
          Registration Form
        </p>
        <div className="h-full">
          <div className="h-full">
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
                    index <= 10
                  ) {
                    return (
                      <FormField
                        key={key}
                        control={form.control}
                        name={key as keyof z.infer<typeof formSchema>}
                        render={({ field }) => (
                          <FormItem
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setCookies(key, e.target.value)}
                          >
                            <FormLabel>{label}</FormLabel>
                            <FormControl>
                              {renderInput(index, label, key, { ...field })}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  }
                })}
                {currentPage == 5 ? (
                  <FileUpload title="Abstract of Invention" accept="images/*"/>
                ) : null}
                {currentPage == 6 ? (
                  <FileUpload title="Design of Invention" accept="images/*"/>
                ) : null}
                {currentPage == 7 ? <Confirmation /> : null}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
