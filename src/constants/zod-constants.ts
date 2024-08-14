import { z } from "zod";
import validator from "validator";
/**
 * Below are the form schema from zod to validate user input that are used in the app. The schema are defined in object form.
 */

export const ZodConstants = {
  formSchema: z.object({
    email: z.string().min(2,{message: "Enter at least 2 character"}).max(64, {message: "email is to long"}).email({ message: "Invalid email, please enter valid email" }),
    leaderName: z.string().min(2, { message: "Leader name is required, enter at least 2 characters"}).max(64, {message: "Leader name is to long"}),
    membersName: z.string().min(2, { message: "Members name is required, enter at least 2 characters and separated with comma (,)" }).max(512, "Maximum character is 512").refine((member)=> member.split(",").length <= 5, "Maximum number of member is 5").refine((member)=> member.trim().substr(-1) != ",", "Invalid member name"),
    supervisorName: z.string().min(2, { message: "Supervisor name is required, enter at least 2 characters" }).max(128, {message: "Supervisor name is to long, enter max 64 characters" }),
    universityOrigin: z.string().min(2, { message: "University is required, enter at least 2 characters" }).max(256, {message: "University origin is to long, enter at least 2-256 characters" }),
    whatsappNumber: z.string().min(10, {message: "enter at least 10 characters"}).max(14, {message: "enter maximal 14 characters"}).refine(validator.isMobilePhone, "Invalid WhatsApp number, enter at least 11-14 characters"),
    competitionCategory: z.string().min(2, { message: "Please select competition category" }).max(256, {message: "Please select competition category"}),
    formOfInvention: z.string().min(2, { message: "Form of invention is required" }).max(256, {message: "Please select invention form"}),
    titleOfInnovation: z.string().min(2, { message: "Title of innovation is required" }).max(256, {message: "Innovation title to long"}),
    titleOfProduct: z.string().min(2, { message: "Title of product is required" }).max(256, {message: "Product title to long"}),
    // competitionBatch: z.string().min(1, {message: "Competition batch is required"}),
    patentNumber: z.string().max(20, {message: "Enter max 20 character"}).optional(),
    scanStudentId: z.string().min(5, { message: "Scan Student Id is required" }),
    abstract: z.string().min(5, { message: "Abstract is required" }),
    productDescription: z.string().min(5, { message: "Product description is required" }).max(256, {message: "abstract url is to long"}),
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
    titleOfProduct: "",
    patentNumber: "",
    scanStudentId: "",
    abstract: "",
    // competitionBatch: "",
    productDescription: "",
  },
};