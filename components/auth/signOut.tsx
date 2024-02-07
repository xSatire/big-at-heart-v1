import React from "react";
import { auth, signOut } from "@/auth";

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        "use server";

        await signOut();
      }}
    >
      <button className="outline_btn">Sign Out</button>
    </form>
  );
};

export default SignOutButton;
