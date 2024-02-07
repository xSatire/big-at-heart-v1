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
import { getAllUsers } from "@/data/user";
import DeleteButtonUser from "@/components/dashboard/deleteButtonUser";

const UpcomingEvents = async () => {
  const users = await getAllUsers();
  let tableHtml;
  if (users) {
    tableHtml = users.map((user) => {
      return (
        <TableRow key={user.id}>
          <TableCell className="font-medium">{user.name}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell className="text-right flex justify-end gap-x-3">
            <Button size="sm" variant="outline" asChild>
              <Link href={`/dashboard/users/${user.id}`}>View More</Link>
            </Button>
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
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{tableHtml}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UpcomingEvents;
