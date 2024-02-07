import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex mb-5 mt-2 items-center gap-5">
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/approval`}>Approve Profile</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/approval/certificate`}>Send Certificate</Link>
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
