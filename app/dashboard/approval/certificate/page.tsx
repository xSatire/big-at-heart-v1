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
import { getAllCerts } from "@/data/userEvent";
import ApprovedCertButton from "@/components/dashboard/approveCert";

const Certificate = async () => {
  const userEvents = await getAllCerts();
  let tableHtml;
  if (userEvents) {
    tableHtml = userEvents.map((obj) => {
      let { user, events, attendance } = obj;
      return (
        <TableRow key={user.id}>
          <TableCell className="font-medium">{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{events.name}</TableCell>
          <TableCell>{attendance && attendance.toString()}</TableCell>
          <TableCell className="text-right flex justify-end gap-x-3">
            <ApprovedCertButton userId={user.id} eventId={events.id} />
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
              <TableHead className="">Email</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{tableHtml}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Certificate;
