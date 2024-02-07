"use server";

import { getUserEvent, reqCert } from "@/data/userEvent";
import { db } from "@/lib/db";

export const updateAttendance = async (
  userId: string,
  eventId: string,
  attendance: boolean
) => {
  try {
    console.log(attendance);
    await db.userEvent.updateMany({
      where: { userId, eventId },
      data: { attendance },
    });
    console.log("completed");
  } catch {
    return null;
  }
};

export const approveCertServer = async (
  userId: string,
  eventId: string,
  approved: boolean
) => {
  await reqCert(userId, eventId, approved);
};
