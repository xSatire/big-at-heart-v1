"use server";

import * as z from "zod";
import { registerSchema } from "@/schema";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

//Client side schemas are very easy to bypass, you need server side to stop it
export const register = async (values: z.infer<typeof registerSchema>) => {
  const validateFields = registerSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, name, password, phone } = validateFields.data;

  //Check if email is unique
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const created = await db.user.create({
    data: {
      name,
      email,
      password,
      phone,
      age: "",
      gender: "",
      occupation: "",
      expertise: "",
    },
  });

  return { success: "User Created!" };
};
