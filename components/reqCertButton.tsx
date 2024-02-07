"use client";
import React from "react";
import { Button } from "./ui/button";

import { useRouter } from "next/navigation";
import { approveCertServer } from "@/actions/userEvent";

const RequestCert = ({ userId, eventId }: any) => {
  const router = useRouter();
  return (
    <Button
      size="sm"
      className="bg-green-600"
      onClick={() => {
        approveCertServer(userId, eventId, true);
        router.refresh();
      }}
    >
      Approve{" "}
    </Button>
  );
};

export default RequestCert;
