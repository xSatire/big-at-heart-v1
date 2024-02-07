import { db } from "@/lib/db";

export const getUserEvent = async (userId: string, eventId: string) => {
  try {
    const userEvent = await db.userEvent.findFirst({
      where: { userId, eventId },
    });
    return userEvent;
  } catch {
    return null;
  }
};

export const getEventsFromUser = async (userId: string) => {
  try {
    const events = await db.userEvent.findMany({
      where: { userId },
      select: { events: true },
    });
    return events;
  } catch {
    return null;
  }
};

export const getEventsCertFromUser = async (userId: string) => {
  try {
    const events = await db.userEvent.findMany({
      where: { userId },
      select: { events: true, reqCert: true },
    });
    return events;
  } catch {
    return null;
  }
};

export const getUsersFromEvent = async (eventId: string) => {
  try {
    const users = await db.userEvent.findMany({
      where: { eventId },
      select: { user: true, attendance: true },
    });
    return users;
  } catch {
    return null;
  }
};

export const getAllCerts = async () => {
  try {
    const userEvents = await db.userEvent.findMany({
      where: { reqCert: true },
      select: { user: true, events: true, attendance: true },
    });
    return userEvents;
  } catch {
    return null;
  }
};

export const reqCert = async (
  userId: string,
  eventId: string,
  reqCert: boolean
) => {
  try {
    const userEvent = await db.userEvent.updateMany({
      where: { userId, eventId },
      data: { reqCert },
    });
    return null;
  } catch (e) {
    return null;
  }
};
