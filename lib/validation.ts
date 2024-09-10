import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(70, "Name must be at most 70 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+?[0-9]{10,14}$/.test(phone), "Invalid phone number"),
});
