"use server";

import { deleteEvents, getEventById } from "@/data/events";

export const getEvent = async (id: string) => {
  const event = await getEventById(id);
  return event;
};

export const deleteEventServer = async (id: string) => {
  await deleteEvents(id);
  return;
};
