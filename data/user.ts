import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: any) => {
  try {
    const user = await db.user.findFirst({
      where: {
        id,
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch {
    return null;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const users = await db.user.delete({
      where: { id },
    });
    return;
  } catch {
    return null;
  }
};

export const updateUserEvent = async (userId: string, eventId: string) => {
  try {
    await db.userEvent.create({
      data: {
        userId,
        eventId,
        attendance: true,
      },
    });
  } catch {
    return null;
  }
};

export const userApproval = async () => {
  try {
    const users = await db.user.findMany({
      where: {
        approved: false,
      },
    });
    return users;
  } catch {
    return null;
  }
};

export const updateUserApproval = async (id: string, approved: boolean) => {
  try {
    await db.user.update({
      where: { id },
      data: { approved },
    });
  } catch {
    return null;
  }
};
