"use client";

import React, { useTransition } from "react";
import { Switch } from "@/components/ui/switch";
import { updateAttendance } from "@/actions/userEvent";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AttendanceSwitch = ({
  attendance,
  userId,
  eventId,
}: {
  attendance: any;
  userId: string;
  eventId: string;
}) => {
  const [currentAttendance, setCurrentAttendance] = useState(attendance);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleAttendance = () => {
    startTransition(() => {
      updateAttendance(userId, eventId, !currentAttendance);
      setCurrentAttendance((prev: boolean) => {
        return !prev;
      });
    });
  };
  return (
    <Switch
      checked={currentAttendance}
      onCheckedChange={() => {
        handleAttendance();
        router.refresh();
      }}
      disabled={isPending}
    />
  );
};

export default AttendanceSwitch;
