"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useDebouncedCallback } from "use-debounce";
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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";

const formSchema = InnovationTalkZodConstants.formSchema;
import FileUpload from "@/components/registration/file-upload/file-upload";
import Confirmation from "@/components/registration/confirmation/confirmation";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import {
  getCookie,
  getCookies,
  removeAllCookies,
  setAllCookies,
  setCookies,
} from "@/lib/action/cookies/cookie-action";
import { useEffect, useState } from "react";
import FormLoading from "@/components/registration/form/form-loading";
import SubmitedPage from "@/components/registration/submited/submited";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { ImageConstants } from "@/constants/image-constants";
import { InnovationTalkZodConstants } from "@/constants/zod-innovation-talk-constants";
import { insertInnovationTalkRegistrationAction } from "@/lib/action";

interface Props {
  params: {
    page: string;
  };
}

const RegistrationPage: NextPage<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [fileUploadColor, setFileUploadColor] = useState("main");
  const [isAgree, setIsAgree] = useState(false);
  const [filledList, setFilledList] = useState<string[]>([]);
  const [forms, setForms] = useState<{ [key: string]: string }>({});
  const [acceptCookie, setAcceptCookie] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: InnovationTalkZodConstants.formDefaultValues,
  });
  const { setValue, getValues, trigger } = form;

  const fetchCookies = async () => {
    setLoading(true);

    setFileUploadColor("main");
    const cookies = await getCookies();
    const agreement = await getCookie("cookie");
    if (agreement != undefined && agreement.value == "true") {
      setAcceptCookie(true);
    }

    await Promise.all(cookies);
    let cookieList: string[] = [];

    if (cookies) {
      cookies.forEach((cookie) => {
        if (Object.keys(form.getValues()).includes(cookie.name)) {
          const cookieKey = cookie.name as keyof z.infer<typeof formSchema>;
          setValue(cookieKey, cookie.value);
          setFilledList([...filledList, cookie.name]);
          cookieList.push(cookieKey);
          trigger(cookieKey);
        }
      });
    }

    setFilledList(cookieList);
    setLoading(false);
  };
  useEffect(() => {
    fetchCookies();
  }, []);

  const renderInput = (
    index: number,
    label: string,
    key: string,
    placeholder: string,
    { ...field }
  ) => {
    return (
      <Input
        className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main-300 focus:outline-none focus-visible:ring-main-300"
        placeholder={placeholder  == "Organization" ? "Instances" : placeholder}
        {...field}
      />
    );
  };
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await insertInnovationTalkRegistrationAction(values);
      const emailResponse = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.emailUser,
          payment: values.payment,
        }),
      });
      if (!emailResponse.ok) {
        throw new Error("Failed to send email");
      }
      removeAllCookies(filledList);
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

  const handleFileUploadChange = (key: string, url: string) => {
    if (acceptCookie) {
      setCookies(key, url);
      fetchCookies();
    } else {
      form.setValue(key as keyof z.infer<typeof formSchema>, url);
      setFilledList((prevList) => {
        if (!prevList.includes(key)) {
          return [...prevList, key];
        }
        return prevList;
      });
    }
  };

  const debounced = useDebouncedCallback(() => {
    const cookieData: CookieType[] = Object.keys(forms).map((key) => ({
      key,
      value: forms[key],
    }));
    setAllCookies(cookieData);
  }, 3000);

  return (
    <div className="w-full relative">
      {loading ? <FormLoading /> : null}
      <div className="relative">
        <div className="absolute top-0 right-0">
          <p className="p-2 text-blue-500 font-light">
            Page {currentPage > 4 ? 4 : currentPage} / 4
          </p>
        </div>
      </div>
      <div className="w-full px-3 md:px-28 bg-white rounded-2xl">
        <p className="max-sm:text-lg rows-span-1 bg-gradient-to-r bg-clip-text text-transparent from-blue-700 via-blue-400 to-blue-700 font-bold text-2xl pt-6 md:pt-4 text-center underline">
          Innovation Talk Registration Form
        </p>
        <div>
          <div>
            <Form {...form}>
              <form className="space-y-8">
                {Object.keys(formSchema.shape).map((key, index) => {
                  const zodKey = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());
                  let label = zodKey;
                  if (zodKey.includes("Patent")) {
                    label = "Patent Number (Optional)";
                  } else if (zodKey.includes("Members")) {
                    label = "Enter Max 5 members separated with comma (,)";
                  }
                  const formLocation = currentPage * 3;
                  if (
                    index >= formLocation - 3 &&
                    index < formLocation &&
                    index <= 4
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
                              const tg = await trigger(
                                key as keyof z.infer<typeof formSchema>
                              );
                              setFilledList((prevList) => {
                                if (tg) {
                                  // Add the key if it's not already in the list
                                  if (!prevList.includes(key)) {
                                    return [...prevList, key];
                                  }
                                } else {
                                  // Remove the key if it's in the list
                                  return prevList.filter(
                                    (item) => item !== key
                                  );
                                }
                                return prevList;
                              });
                              if (acceptCookie) {
                                const { value } = e.target;
                                setForms((prevForm) => ({
                                  ...prevForm,
                                  [key]: value,
                                }));

                                debounced();
                              }
                            }}
                          >
                            <FormLabel>{label == "Organization" ? "Instances" : label}</FormLabel>
                            <FormControl>
                              {renderInput(index, label, key, zodKey, {
                                ...field,
                              })}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  }
                })}
                {currentPage == 3 ? (
                  <FileUpload
                    onLoading={(upload: boolean) => setUploading(upload)}
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      if (acceptCookie) {
                        setCookies("payment", url);
                        fetchCookies();
                      } else {
                        form.setValue("payment", url);
                        handleFileUploadChange("payment", url);
                      }
                    }}
                    title="Receipt of payment (JPG/PNG/JPEG) - Max 1MB"
                    accept=""
                    bucket="payment"
                    contentType=""
                    fileUrl={getValues("payment") ?? form.getValues("payment")}
                  />
                ) : null}
                {currentPage == 4 ? (
                  <Confirmation
                    onChange={(agree: boolean) => setIsAgree(agree)}
                  />
                ) : null}
                {currentPage == 5 ? <SubmitedPage /> : null}
              </form>
            </Form>
            {currentPage >= 1 && currentPage <= 4 ? (
              <div
                className={`w-full flex ${
                  currentPage == 1 ? "justify-end" : "justify-between"
                } items-center py-5 z-10`}
              >
                {currentPage == 1 ? null : (
                  <Button
                    onClick={async () => {
                      setCurrentPage(currentPage - 1);
                      setFilledList(filledList);
                    }}
                    disabled={uploading}
                    className="border-2 border-black w-40 rounded-xl h-14"
                    variant={"outline"}
                  >
                    {TextConstants.en.back}
                  </Button>
                )}
                {currentPage == 4 ? (
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
                        {TextConstants.en.submit}
                      </Button>
                    )}

                    <DialogContent className="bg-main-primary border-0 md:border-2 border-white flex items-center justify-center flex-col">
                      <DialogTitle className="flex justify-center items-center flex-col text-white text-center">
                        <Image
                          src={SvgConstants.warningLineIcon}
                          alt="Warning Line"
                        />
                        <p className="text-4xl">
                          {TextConstants.en.confirmationTitle}
                        </p>
                      </DialogTitle>
                      <DialogDescription>
                        <p className="text-white">
                          {TextConstants.en.confirmationDescription}
                        </p>
                      </DialogDescription>
                      <DialogFooter className="!justify-between items-center flex-row w-full">
                        <DialogClose asChild>
                          <Button
                            type="button"
                            variant="secondary"
                            className="border-2 rounded-2xl text-red-500 w-32 hover:bg-red-500 hover:bg-opacity-30 border-red-500 bg-transparent"
                          >
                            {TextConstants.en.cancel}
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button
                            onClick={async () => {
                              const isFilled = await trigger();
                              if (isFilled) {
                                onSubmit(form.getValues());
                              }
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
                          index <= 4
                        ) {
                          await trigger(
                            key as keyof z.infer<typeof formSchema>
                          ).then((e) => {
                            if (!e) validForm = false;
                          });
                        } else if (currentPage == 3) {
                          validForm =
                            validForm && (await trigger("payment"));
                          if (!validForm) setFileUploadColor("red");
                        }
                      });

                      await Promise.all(validationPromises);
                      setFilledList(filledList);

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
            <Image
              src={ImageConstants.cubeDecoration2}
              alt="Cube"
              className="absolute -translate-x-44 -translate-y-16 hidden lg:block w-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
