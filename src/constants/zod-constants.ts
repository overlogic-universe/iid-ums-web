import { z } from "zod";

/**
 * Below are the form schema from zod to validate user input that are used in the app. The schema are defined in object form.
 */

export const ZodConstants = {
  formSchema: z.object({
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
  }),
  formDefaulValue: {
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
};
