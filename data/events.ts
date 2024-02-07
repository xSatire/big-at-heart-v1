import { db } from "@/lib/db";

export const getEventById = async (id: string) => {
  try {
    const event = await db.event.findUnique({ where: { id } });
    return event;
  } catch {
    return null;
  }
};

export const getAllUpcomingEvents = async () => {
  try {
    const events = await db.event.findMany({
      where: { completed: false },
    });
    return events;
  } catch {
    return null;
  }
};

export const getAllPastEvents = async () => {
  try {
    const events = await db.event.findMany({
      where: { completed: true },
    });
    return events;
  } catch {
    return null;
  }
};

export const deleteEvents = async (id: string) => {
  try {
    console.log(id);
    const event = await db.event.delete({
      where: { id: id },
    });
    console.log("deleted");
  } catch (e) {
    console.log(e);
    return null;
  }
};
