import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const layout = ({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: any }>) => {
  const { id } = params;
  return (
    <div>
      <div className="flex mb-5 mt-2 items-center gap-5">
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/pastEvents/${id}`}>Edit Event Details</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/pastEvents/${id}/attendance`}>
            Check Attendance
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href={`/dashboard/upcomingEvents/${id}/reports`}>
            Detailed Reports
          </Link>
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
