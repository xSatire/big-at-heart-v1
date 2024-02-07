"use client";
import React from "react";
import { Button } from "../ui/button";
import { deleteEventServer } from "@/actions/getEvent";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: any) => {
  const router = useRouter();
  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={() => {
        deleteEventServer(id);
        router.refresh();
      }}
    >
      Delete{" "}
    </Button>
  );
};

export default DeleteButton;
