import { z } from "zod";

/**
 * Below are the form schema from zod to validate user input that are used in the app. The schema are defined in object form.
 */

export const ZodConstants = {
  formSchema: z.object({
    email: z.string().email({ message: "Invalid email" }),
    leaderName: z.string().min(2, { message: "Leader name is required" }),
    membersName: z.string().min(2, { message: "Members name is required" }),
    supervisorName: z.string().min(2, { message: "Supervisor name is required" }),
    universityOrigin: z.string().min(2, { message: "University is required" }),
    whatsappNumber: z.string().min(12, { message: "Invalid WhatsApp number" }),
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