import { z } from "zod";

export const courseFormSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  image: z.string().url({ message: "Please enter a valid image URL" }),
  price: z.coerce
    .number()
    .min(0, { message: "Price must be a positive number" }),
  level: z.string().min(1, { message: "Please select a level" }),
  language: z.string().min(1, { message: "Please select a language" }),
});
