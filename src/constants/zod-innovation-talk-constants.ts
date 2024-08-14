import { z } from "zod";
import validator from "validator";

/**
 * Schema to validate user input for the registration form for the Innovation Talk.
 * Ensures that all required fields are filled in correctly with appropriate lengths and formats.
 */
const formSchema = z.object({
  // Email field - must be a valid email format, with a maximum length of 64 characters
  emailUser: z
    .string()
    .min(2, { message: "Enter at least 2 characters" })
    .max(64, { message: "Email is too long" })
    .email({ message: "Invalid email, please enter a valid email" }),

  // Name field - must be a non-empty string with a maximum length of 64 characters
  name: z
    .string()
    .min(2, { message: "Name is required, enter at least 2 characters" })
    .max(64, { message: "Name is too long" }),

  // WhatsApp Number field - must be a valid mobile phone number with a length between 10 to 14 characters
  whatsappNumberUser: z
    .string()
    .min(10, { message: "Enter at least 10 characters" })
    .max(14, { message: "Enter a maximum of 14 characters" })
    .refine(
      validator.isMobilePhone,
      "Invalid WhatsApp number, enter a valid number"
    ),

  // Organization field - must be a non-empty string with a maximum length of 64 characters
  organization: z
    .string()
    .min(2, {
      message: "Organization is required, enter at least 2 characters",
    })
    .max(64, { message: "Organization name is too long" }),

  // Faculty field - must be a non-empty string with a maximum length of 128 characters
  faculty: z
    .string()
    .min(2, { message: "Faculty is required, enter at least 2 characters" })
    .max(128, { message: "Faculty name is too long" }),

  // Payment field - must be a non-empty string with a maximum length of 128 characters
  payment: z
    .string()
    .min(2, { message: "Payment is required, enter at least 2 characters" })
    .max(128, { message: "Payment details are too long" }),
});

/**
 * Default values for the registration form.
 * This can be used to initialize the form fields.
 */
const formDefaultValues = {
  emailUser: "",
  name: "",
  whatsappNumberUser: "",
  organization: "",
  faculty: "",
  payment: "",
};


export const InnovationTalkZodConstants = {
  formSchema,
  formDefaultValues,
}