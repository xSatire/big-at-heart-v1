"use server";
export const getTimeDifference = (start: any, end: any) => {
  const startHour = start.slice(0, 2);
  const startMin = start.slice(2, 4);
  const d1 = new Date(`1970-01-01 ${startHour}:${startMin}:00`);
  const endHour = end.slice(0, 2);
  const endMin = end.slice(2, 4);
  const d2 = new Date(`1970-01-01 ${endHour}:${endMin}:00`);
  return d2.getTime() - d1.getTime();
};
