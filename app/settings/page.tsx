import React from "react";
import { auth, signOut } from "@/auth";

const settings = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit" className="bg-blue-400 py-2 px-5">
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default settings;
