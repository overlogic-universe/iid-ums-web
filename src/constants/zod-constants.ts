import { z } from "zod";
import validator from "validator";
/**
 * Below are the form schema from zod to validate user input that are used in the app. The schema are defined in object form.
 */

export const ZodConstants = {
  formSchema: z.object({
    email: z.string().email({ message: "Invalid email" }),
    leaderName: z.string().min(2, { message: "Leader name is required, enter at least 2 characters" }),
    membersName: z.string().min(2, { message: "Members name is required, enter at least 2 characters" }),
    supervisorName: z.string().min(2, { message: "Supervisor name is required, enter at least 2 characters" }),
    universityOrigin: z.string().min(2, { message: "University is required, enter at least 2 characters" }),
    whatsappNumber: z.string().min(12, {message: "enter at least 12 characters"}).max(14, {message: "enter maximal 14 characters"}).refine(validator.isMobilePhone, "Invalid WhatsApp number, enter at least 12-14 characters"),
    competitionCategory: z.string().min(2, { message: "Please select competition category" }),
    formOfInvention: z.string().min(2, { message: "Form of invention is required" }),
    titleOfInnovation: z.string().min(2, { message: "Title of innovation is required" }),
    patentNumber: z.string().optional(),
    scanStudentId: z.string().min(2, { message: "Scan Student Id is required" }),
    abstract: z.string().min(5, { message: "Abstract is required" }),
    productDescription: z.string().min(5, { message: "Product description is required" }),
  }),
  formDefaulValue: {
    email: "",
    leaderName: "",
    membersName: "",
    supervisorName: "",
    universityOrigin: "",
    whatsappNumber: "",
    competitionCategory: "",
    formOfInvention: "",
    titleOfInnovation: "",
    patentNumber: "",
    scanStudentId: "",
    abstract: "",
    productDescription: "",
  },
};