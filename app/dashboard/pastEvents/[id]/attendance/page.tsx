import { getUsersFromEvent } from "@/data/userEvent";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AttendanceSwitch from "@/components/dashboard/attendanceSwitch";

const Attendance = async ({ params }: any) => {
  const { id } = params;
  const users = await getUsersFromEvent(id);

  let tableHtml;
  if (users) {
    tableHtml = users.map((userObj) => {
      let user = userObj.user;
      return (
        <TableRow key={user.id}>
          <TableCell className="font-medium">{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>
            {" "}
            <Button size="sm" variant="outline" asChild>
              <Link href={`/dashboard/users/${user.id}`}>View More</Link>
            </Button>
          </TableCell>
          <TableCell className="text-right flex justify-end gap-x-3">
            <AttendanceSwitch
              userId={user.id}
              eventId={id}
              attendance={userObj.attendance}
            />
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <div>
      <div className="font-bold text-lg mb-5 text-center text-red-400">
        User List
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Action </TableHead>
              <TableHead className="text-right">Attendance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{tableHtml}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Attendance;
