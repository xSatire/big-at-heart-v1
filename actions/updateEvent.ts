"use server";

import { updateEventSchema } from "@/schema";
import { db } from "@/lib/db";

export const updateEvent = async (values: any) => {
  const validateData = updateEventSchema.safeParse(values);

  if (!validateData.success) {
    return { error: "required data is missing" };
  }

  const {
    id,
    name,
    date,
    startTime,
    endTime,
    location,
    description,
    organizerContact,
    organizerName,
    completed,
  } = validateData.data;

  const created = await db.event.update({
    where: {
      id,
    },
    data: {
      name,
      date,
      startTime,
      EndTime: endTime,
      location,
      description,
      organizerContact,
      organizerName,
      completed,
    },
  });

  return { success: "The data has been updated" };
};
