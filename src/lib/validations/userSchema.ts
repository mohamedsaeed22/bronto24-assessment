import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  user_name: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be at most 50 characters"),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(18, "User must be at least 18 years old")
    .max(100, "User must be at most 100 years old")
    .optional()
    .or(z.undefined()),
    country: z.number({
      required_error: "Country is required", 
      invalid_type_error: "Country selection is required"
    }).int().positive("Please select a country"),
    gender: z.string().min(1, "Please select a gender"),
  job_title: z
    .string()
    .min(2, "Job title must be at least 2 characters")
    .max(50, "Job title must be at most 50 characters"),
});

export type UserFormValues = z.infer<typeof userSchema>;
