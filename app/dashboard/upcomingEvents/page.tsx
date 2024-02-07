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
import { getAllUpcomingEvents } from "@/data/events";
import DeleteButton from "@/components/dashboard/deleteButton";

const UpcomingEvents = async () => {
  const events = await getAllUpcomingEvents();
  let tableHtml;
  if (events) {
    tableHtml = events.map((event) => {
      return (
        <TableRow key={event.id}>
          <TableCell className="font-medium">{event.name}</TableCell>
          <TableCell>{event.date}</TableCell>
          <TableCell>{event.location}</TableCell>
          <TableCell className="text-right flex justify-end gap-x-3">
            <Button size="sm" variant="outline" asChild>
              <Link href={`/dashboard/upcomingEvents/${event.id}`}>
                View More
              </Link>
            </Button>
            <DeleteButton id={event.id} />
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <div>
      <div className="font-bold text-lg mb-5 text-center text-red-400">
        Upcoming Events
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Event Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Location</TableHead>
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
