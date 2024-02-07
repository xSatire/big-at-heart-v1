"use client";
import React from "react";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";
import { approveCertServer } from "@/actions/userEvent";

const ApprovedCertButton = ({ userId, eventId }: any) => {
  const router = useRouter();
  return (
    <Button
      size="sm"
      className="bg-green-600"
      onClick={() => {
        approveCertServer(userId, eventId, false);
        router.refresh();
      }}
    >
      Approve{" "}
    </Button>
  );
};

export default ApprovedCertButton;
