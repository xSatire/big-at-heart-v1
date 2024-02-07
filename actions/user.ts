"use server";

import { deleteUser, updateUserApproval } from "@/data/user";
import { updateUserEvent } from "@/data/user";
import { getUserEvent } from "@/data/userEvent";
import { updateUserSchema } from "@/schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteUserServer = async (id: string) => {
  await deleteUser(id);
};

export const handleSignUp = async (userId: string, eventId: string) => {
  const existingUserEvent = await getUserEvent(userId, eventId);
  if (existingUserEvent) {
    return { error: "You have already signed up for this event" };
  }
  await updateUserEvent(userId, eventId);
  return { success: "You have successfully signed up!" };
};

export const updateUser = async (values: any) => {
  const validateData = updateUserSchema.safeParse(values);

  if (!validateData.success) {
    return { error: "required data is missing" };
  }

  const {
    id,
    name,
    password,
    email,
    phone,
    age,
    gender,
    occupation,
    expertise,
  } = validateData.data;

  const created = await db.user.update({
    where: {
      id,
    },
    data: {
      id,
      name,
      email,
      password,
      phone,
      age,
      gender,
      occupation,
      expertise,
    },
  });

  return { success: "The data has been updated" };
};

export const approveUserServer = async (id: string, approved: boolean) => {
  await updateUserApproval(id, approved);
};
