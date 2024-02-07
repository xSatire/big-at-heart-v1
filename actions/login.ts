"use server";

import { loginSchema } from "@/schema";
import { getUserByEmail } from "@/data/user";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: any) => {
  const validateFields = await loginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields" };
  }
  const { email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid Email" };
  }

  if (existingUser.password !== password) {
    return { error: "Invalid Password" };
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  console.log(validateFields);
  return { success: "Success!" };
};
