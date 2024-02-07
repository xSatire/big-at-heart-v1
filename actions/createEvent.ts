"use server";

import { z } from "zod";
import { createEventSchema } from "@/schema";
import { db } from "@/lib/db";

export const createEvent = async (values: any) => {
  const validateData = createEventSchema.safeParse(values);

  if (!validateData.success) {
    return { error: "required data is missing" };
  }

  const {
    name,
    date,
    startTime,
    endTime,
    location,
    description,
    organizerContact,
    organizerName,
  } = validateData.data;

  const created = await db.event.create({
    data: {
      name,
      date,
      startTime,
      EndTime: endTime,
      location,
      description,
      organizerContact,
      organizerName,
    },
  });

  return { success: "New Event has been created" };
};
