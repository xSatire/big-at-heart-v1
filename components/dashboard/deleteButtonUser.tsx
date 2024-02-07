"use client";
import React from "react";
import { Button } from "../ui/button";
import { deleteUserServer } from "@/actions/user";

const DeleteButtonUser = ({ id }: any) => {
  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={() => {
        deleteUserServer(id);
      }}
    >
      Delete{" "}
    </Button>
  );
};

export default DeleteButtonUser;
