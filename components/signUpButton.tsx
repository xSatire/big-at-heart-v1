"use client";
import React, { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { handleSignUp } from "@/actions/user";
import { FormError } from "./auth/form-error";
import { FormSuccess } from "./auth/form-success";

const SignUpButton = ({ userId, eventId }: any) => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleClick = () => {
    setError("");
    setSuccess("");
    startTransition(() => {
      handleSignUp(userId, eventId).then((res: any) => {
        setError(res?.error);
        setSuccess(res?.success);
      });
    });
  };
  return (
    <div className="flex flex-col gap-y-3">
      <Button
        size="lg"
        className="bg-rose-400 font-semibold"
        onClick={handleClick}
        disabled={isPending}
      >
        {" "}
        Sign Up Now!
      </Button>
      <FormError message={error} />
      <FormSuccess message={success} />
    </div>
  );
};

export default SignUpButton;
