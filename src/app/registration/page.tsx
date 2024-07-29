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
import FileUpload from "@/components/registraion/file-upload/file-upload";
import Confirmation from "@/components/registraion/confirmation/confirmation";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import {
  getCookies,
  getTotalCookies,
  removeAllCookies,
  removeCookies,
  setCookies,
} from "@/lib/action/cookies/cookie-action";
import { useEffect, useState } from "react";
import FormLoading from "@/components/registraion/form/form-loading";
import SubmitedPage from "@/components/registraion/submited/submited";

interface Props {
  params: {
    page: string;
  };
}

// Define the selectContent object with the specified keys
const selectContent: Record<SelectContentKeys, string[]> = {
  competitionCategory: [
    "Health, Pharmacy, Beauty and Personal Care Products, Functional Food",
    "Education, Technology Information and Communication, Teaching Tools Materials, IoT and Apps",
    "Health Technology and Promotion Based IoT & Apss, and Applied Science",
  ],
  formOfInvention: [
    "Prototype",
    "Models",
    "Ready-Made Product",
    "Commercialized Product",
  ],
};

const RegistrationPage: NextPage<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [fileUploadColor, setFileUploadColor] = useState("main");
  const [isAgree, setIsAgree] = useState(false);
  const [filled, setFilled] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ZodConstants.formDefaulValue,
  });
  const { setValue, getValues, trigger } = form;

  const fetchCookies = async () => {
    setLoading(true);

    setFileUploadColor("main");
    const cookies = await getCookies();
    console.log(cookies);

    await Promise.all(cookies);
    if (cookies) {
      cookies.forEach((cookie) => {
        if (Object.keys(form.getValues()).includes(cookie.name)) {
          setValue(
            cookie.name as keyof z.infer<typeof formSchema>,
            cookie.value
          );
        }
      });
      console.log(form.getValues());
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCookies();
  }, []);

  const renderInput = (
    index: number,
    label: string,
    key: string,
    { ...field }
  ) => {
    switch (index) {
      case 6:
      case 7:
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
              {selectContent[key as SelectContentKeys].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
      setLoading(true);
      await insertRegistrationAction(values);
      removeAllCookies();
      form.reset();
      toast({
        title: TextConstants.en.registrationSuccessTitle,
        description: TextConstants.en.registrationSucessDescription,
        action: (
          <ToastAction altText="Close">{TextConstants.en.close}</ToastAction>
        ),
      });
      setCurrentPage(currentPage + 1);
    } catch (error) {
      toast({
        title: TextConstants.en.registrationFailedTitle,
        description: TextConstants.en.registrationFailedDescription,
        action: (
          <ToastAction altText="Close">{TextConstants.en.close}</ToastAction>
        ),
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full relative">
      {loading ? <FormLoading /> : null}
      <div className="relative">
        <div className="absolute top-0 right-0">
          <p className="p-2 text-main font-light">{filled}/13</p>
        </div>
      </div>
      <div className="w-full px-28 bg-white rounded-2xl">
        <p className="rows-span-1 text-main-600 font-bold text-2xl pt-4 text-center underline">
          Registration Form
        </p>
        <div>
          <div>
            <Form {...form}>
              <form className="space-y-8">
                {Object.keys(formSchema.shape).map((key, index) => {
                  const label = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());
                  const formLocation = currentPage * 3;
                  if (
                    index >= formLocation - 3 &&
                    index < formLocation &&
                    index < 10
                  ) {
                    return (
                      <FormField
                        key={key}
                        control={form.control}
                        name={key as keyof z.infer<typeof formSchema>}
                        render={({ field }) => (
                          <FormItem
                            onChange={async (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setCookies(key, e.target.value);
                            }}
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
                  <FileUpload
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      setCookies("scanStudentId", url);
                      fetchCookies();
                    }}
                    title="Scan Student ID Card (PNG/JPEG/JPG)"
                    accept=".png, .jpg, .jpeg"
                    bucket="student_id"
                    contentType=""
                    fileUrl={getValues("scanStudentId")}
                  />
                ) : null}
                {currentPage == 6 ? (
                  <FileUpload
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      setCookies("abstract", url);
                      fetchCookies();
                    }}
                    title="Abstract (PDF)"
                    accept=".pdf"
                    bucket="abstract"
                    contentType="application/pdf"
                    fileUrl={getValues("abstract")}
                  />
                ) : null}
                {currentPage == 7 ? (
                  <FileUpload
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      setCookies("productDescription", url);
                      fetchCookies();
                    }}
                    title="Description (PDF)"
                    accept=".pdf"
                    bucket="description"
                    contentType="application/pdf"
                    fileUrl={getValues("productDescription")}
                  />
                ) : null}
                {currentPage == 8 ? (
                  <Confirmation
                    onChange={(agree: boolean) => setIsAgree(agree)}
                  />
                ) : null}
                {currentPage == 9 ? <SubmitedPage /> : null}
              </form>
            </Form>
            {currentPage >= 1 && currentPage <= 8 ? (
              <div
                className={`w-full flex ${
                  currentPage == 1 ? "justify-end" : "justify-between"
                } items-center py-5 z-10`}
              >
                {currentPage == 1 ? null : (
                  <Button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="border-2 border-black w-40 rounded-xl h-14"
                    variant={"outline"}
                  >
                    Back
                  </Button>
                )}
                {currentPage == 8 ? (
                  <Dialog>
                    {isAgree ? (
                      <DialogTrigger asChild>
                        <Button className="w-40 rounded-xl h-14">Submit</Button>
                      </DialogTrigger>
                    ) : (
                      <Button
                        onClick={() => {
                          toast({
                            title: TextConstants.en.confirmationTitleError,
                            description:
                              TextConstants.en.confirmationDescriptionError,
                            variant: "destructive",
                            action: (
                              <ToastAction altText="Close">
                                {TextConstants.en.close}
                              </ToastAction>
                            ),
                          });
                        }}
                        className="w-40 rounded-xl h-14"
                      >
                        Submit
                      </Button>
                    )}

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
                        <DialogClose>
                          <Button
                            onClick={() => {
                              onSubmit(form.getValues());
                            }}
                            type="button"
                            variant="secondary"
                            className="border-2 rounded-2xl text-white w-32 hover:bg-white hover:bg-opacity-30 border-white bg-transparent"
                          >
                            Submit
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    onClick={async () => {
                      let validForm = true;
                      const formLocation = currentPage * 3;

                      const validationPromises = Object.keys(
                        formSchema.shape
                      ).map(async (key, index) => {
                        if (
                          index >= formLocation - 3 &&
                          index < formLocation &&
                          index <= 9
                        ) {
                          validForm =
                            validForm &&
                            (await trigger(
                              key as keyof z.infer<typeof formSchema>
                            ));
                        } else if (currentPage == 5) {
                          validForm =
                            validForm && (await trigger("scanStudentId"));
                          if (!validForm) setFileUploadColor("red");
                        } else if (currentPage == 6) {
                          validForm = validForm && (await trigger("abstract"));
                          if (!validForm) setFileUploadColor("red");
                        } else if (currentPage == 7) {
                          validForm =
                            validForm && (await trigger("productDescription"));
                          if (!validForm) setFileUploadColor("red");
                        }
                      });

                      await Promise.all(validationPromises);

                      const totalCookies = await getTotalCookies();
                      setFilled(totalCookies);

                      if (validForm) {
                        setCurrentPage(currentPage + 1);
                      } else {
                        toast({
                          title: TextConstants.en.uncompleteFormTitleError,
                          description:
                            TextConstants.en.uncompleteFormDescriptionError,
                          variant: "destructive",
                          action: (
                            <ToastAction altText="Close">
                              {TextConstants.en.close}
                            </ToastAction>
                          ),
                        });
                      }
                    }}
                    className="w-40 rounded-xl h-14"
                  >
                    Next
                  </Button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
