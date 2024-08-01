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
import { selectContent } from "@/constants/competition-category-constants";
import { NextPage } from "next";

const formSchema = ZodConstants.formSchema;
import FileUpload from "@/components/registraion/file-upload/file-upload";
import Confirmation from "@/components/registraion/confirmation/confirmation";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import {
  getCookie,
  getCookies,
  getTotalCookies,
  removeAllCookies,
  setAllCookies,
  setCookies,
} from "@/lib/action/cookies/cookie-action";
import { useCallback, useEffect, useState } from "react";
import FormLoading from "@/components/registraion/form/form-loading";
import SubmitedPage from "@/components/registraion/submited/submited";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { ImageConstants } from "@/constants/image-constants";
import AOS from "aos";

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
  const [filled, setFilled] = useState(0);
  const [filledList, setFilledList] = useState<string[]>([]);
  const [forms, setForms] = useState<{ [key: string]: string }>({});
  const [acceptCookie, setAcceptCookie] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: ZodConstants.formDefaulValue,
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
    if (cookies) {
      cookies.forEach((cookie) => {
        if (Object.keys(form.getValues()).includes(cookie.name)) {
          setValue(
            cookie.name as keyof z.infer<typeof formSchema>,
            cookie.value
          );
        }
      });
    }
    setLoading(false);
  };

  const fetchTotalCookies = async () => {
    const cookie = await getTotalCookies();
    setFilled(cookie);
  };
  useEffect(() => {
    AOS.init({
      duration: 1500,
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(
          navigator.userAgent
        );
      },
    });
    fetchCookies();
    fetchTotalCookies();
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
            <SelectTrigger className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main-300 focus:outline-none focus-visible:ring-main-300">
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent className="min-w-0 fixed">
              {selectContent[key as SelectContentKeys].map((item) => (
                <SelectItem key={item} value={item} className="">
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            className="border-2 border-[#9F9F9F] h-16 rounded-xl focus:border-main-300 focus:outline-none focus-visible:ring-main-300"
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

  const handleFileUploadChange = (key: string, url: string) =>{
    if(acceptCookie){
      setCookies(key, url)
      fetchCookies();
      } else {
        form.setValue(key as keyof z.infer<typeof formSchema>, url)
        setFilledList(prevList => {
          if (!prevList.includes(key)) {
            return [...prevList, key];
          }
          return prevList;
        });
      }
  }

  const debounced = useDebouncedCallback(() => {
    const cookieData: CookieType[] = Object.keys(forms).map((key) => ({
      key,
      value: forms[key],
    }));
    setAllCookies(cookieData);
  }, 3000);

  return (
    <div className="w-full relative" data-aos="fade-up">
      {loading ? <FormLoading /> : null}
      <div className="relative">
        <div className="absolute top-0 right-0">
          <p className="p-2 text-blue-500 font-light">{acceptCookie ? filled : filledList.length}/13</p>
        </div>
      </div>
      <div className="w-full px-3 md:px-28 bg-white rounded-2xl">
        <p className="rows-span-1 bg-gradient-to-r bg-clip-text text-transparent from-blue-700 via-blue-400 to-blue-700 font-bold text-2xl pt-4 text-center underline">
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
                              const tg = await trigger(key as  keyof z.infer<typeof formSchema>)
                              if (acceptCookie) {
                                const { value } = e.target;
                                setForms((prevForm) => ({
                                  ...prevForm,
                                  [key]: value,
                                }));

                                debounced();
                              } else {
                                setFilledList(prevList => {
                                  if (tg) {
                                    // Add the key if it's not already in the list
                                    if (!prevList.includes(key)) {
                                      return [...prevList, key];
                                    }
                                  } else {
                                    // Remove the key if it's in the list
                                    return prevList.filter(item => item !== key);
                                  }
                                  return prevList;
                                });
                              }
                            }}
                          >
                            <FormLabel>
                              {label.includes("Patent")
                                ? "Patent Number (Optional)"
                                : label}
                            </FormLabel>
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
                    onLoading={(upload: boolean)=>setUploading(upload)}
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      if(acceptCookie){
                        setCookies("scanStudentId", url);
                        fetchCookies();
                      } else {
                        form.setValue("scanStudentId",url)
                        handleFileUploadChange("scanStudentId", url);
                      }
                    }}
                    title="Scan Student ID Card (PNG/JPEG/JPG) - Max 1MB"
                    accept=".png, .jpg, .jpeg"
                    bucket="student_id"
                    contentType=""
                    fileUrl={getValues("scanStudentId") ?? form.getValues("scanStudentId")}
                  />
                ) : null}
                {currentPage == 6 ? (
                  <FileUpload
                    onLoading={(upload: boolean)=>setUploading(upload)}
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      if(acceptCookie){
                      setCookies("abstract", url);
                      fetchCookies();
                      } else {
                        form.setValue("abstract", url)
                        handleFileUploadChange("abstract", url);
                      }
                    }}
                    title="Abstract (PDF) - Max 5MB"
                    accept=".pdf"
                    bucket="abstract"
                    contentType="application/pdf"
                    fileUrl={getValues("abstract") ?? form.getValues("abstract")}
                  />
                ) : null}
                {currentPage == 7 ? (
                  <FileUpload
                    onLoading={(upload: boolean)=>setUploading(upload)}
                    color={fileUploadColor}
                    onChange={(url: string) => {
                      if(acceptCookie){
                        setCookies("productDescription", url);
                        fetchCookies();
                      } else {
                        form.setValue("productDescription", url)
                        handleFileUploadChange("productDescription", url);
                      }
                    }}
                    title="Description (PDF) - Max 5MB"
                    accept=".pdf"
                    bucket="description"
                    contentType="application/pdf"
                    fileUrl={getValues("productDescription") ?? form.getValues("productDescription")}
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
                    onClick={async () => {
                      const totalCookies = await getTotalCookies();
                      setFilled(totalCookies);
                      setCurrentPage(currentPage - 1);
                    }}
                    disabled={uploading}
                    className="border-2 border-black w-40 rounded-xl h-14"
                    variant={"outline"}
                  >
                    {TextConstants.en.back}
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
                        {TextConstants.en.submit}
                      </Button>
                    )}

                    <DialogContent className="bg-main-300 border-0 md:border-2 border-white flex items-center justify-center flex-col">
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
                          index <= 9
                        ) {
                          await trigger(
                            key as keyof z.infer<typeof formSchema>
                          ).then((e) => {
                            if (!e) validForm = false;
                          });
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
            <Image
              src={ImageConstants.cubeDecoration2}
              alt="Cube"
              className="absolute -translate-x-44 -translate-y-16 hidden lg:block"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
