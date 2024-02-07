"use client";
import React from "react";
import { Button } from "../ui/button";

import { useRouter } from "next/navigation";
import { approveUserServer } from "@/actions/user";

const ApprovedProfileButton = ({ id }: any) => {
  const router = useRouter();
  return (
    <Button
      size="sm"
      className="bg-green-600"
      onClick={() => {
        approveUserServer(id, true);
        router.refresh();
      }}
    >
      Approve{" "}
    </Button>
  );
};

export default ApprovedProfileButton;
