"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";
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

import { NextPage } from "next";

interface Props<T extends ZodSchema<any, z.ZodTypeDef, any>> {
  onSubmit: (values: z.infer<T>) => void;
}
const formSchema = z.object({
  competitionCategory: z
    .string()
    .min(2, { message: "Please select competition category" }),
  nameOfInventor: z.string().min(2, { message: "Name is required" }),
  institution: z.string().min(2, { message: "Institution is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phoneNumber: z.string().min(12, { message: "Invalid phone number" }),
  whatsappNumber: z.string().min(12, { message: "Invalid WhatsApp number" }),
  address: z.string().min(5, { message: "Address is required" }),
  titleOfInvention: z.string().min(2, { message: "Title is required" }),
  stageOfInvention: z.string().min(2, { message: "Stage is required" }),
  scopeOfInvention: z.string().min(2, { message: "Scope is required" }),
  descriptionOfInvention: z
    .string()
    .min(5, { message: "Description is required" }),
  abstractOfInvention: z.string().min(5, { message: "Abstract is required" }),
  designOfInvention: z.string().min(5, { message: "Design is required" }),
});

const RegistrationForm: NextPage<Props<typeof formSchema>> = ({onSubmit}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      competitionCategory: "",
      nameOfInventor: "",
      institution: "",
      email: "",
      phoneNumber: "",
      whatsappNumber: "",
      address: "",
      titleOfInvention: "",
      stageOfInvention: "",
      scopeOfInvention: "",
      descriptionOfInvention: "",
      abstractOfInvention: "",
      designOfInvention: "",
    },
  });
  return (
    <div>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
