import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
  password: z.string().min(1, {
    message: "Invalid Password",
  }),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: "Invalid Email",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  password: z.string().min(5, {
    message: "Password Not Long Enough",
  }),
  phone: z.string().min(8, {
    message: "invalid phone number",
  }),
});

export const updateUserSchema = z.object({
  id: z.string(),
  email: z.string().email({
    message: "Invalid Email",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  password: z.string().min(5, {
    message: "Password Not Long Enough",
  }),
  phone: z.string().min(8, {
    message: "invalid phone number",
  }),
  age: z.string().optional(),
  gender: z.string().optional(),
  occupation: z.string().optional(),
  expertise: z.string().optional(),
});

export const createEventSchema = z.object({
  name: z.string().min(1, {
    message: "Must have event name",
  }),
  date: z.string().min(1, {
    message: "Must have date",
  }),
  location: z.string().min(1, {
    message: "Must have location",
  }),
  startTime: z.string().min(1, {
    message: "Must have start Time",
  }),
  endTime: z.string().min(1, {
    message: "must have end time",
  }),
  description: z.string().optional(),
  organizerName: z.string().optional(),
  organizerContact: z.string().optional(),
});

export const updateEventSchema = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: "Must have event name",
  }),
  date: z.string().min(1, {
    message: "Must have date",
  }),
  location: z.string().min(1, {
    message: "Must have location",
  }),
  startTime: z.string().min(1, {
    message: "Must have start Time",
  }),
  endTime: z.string().min(1, {
    message: "must have end time",
  }),
  completed: z.boolean(),
  description: z.string().optional(),
  organizerName: z.string().optional(),
  organizerContact: z.string().optional(),
});
