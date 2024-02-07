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
import { getAllPastEvents } from "@/data/events";
import { getEventsCertFromUser } from "@/data/userEvent";
import { auth } from "@/auth";
import RequestCert from "@/components/reqCertButton";

const MyEvents = async () => {
  const session = await auth();
  const pastEvents = await getEventsCertFromUser(session?.user?.id);
  const pastEventsHTML: any = [];
  const upcomingEventsHTML: any = [];

  if (pastEvents) {
    pastEvents.map((events) => {
      let event = events.events;
      if (!event.completed) {
        upcomingEventsHTML.push(
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.name}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>{event.location}</TableCell>
            <TableCell>{event.startTime}</TableCell>
            <TableCell className="text-right flex justify-end gap-x-3">
              <Button size="sm" variant="outline" asChild>
                <Link href={`/events/${event.id}`}>More Details</Link>
              </Button>
            </TableCell>
          </TableRow>
        );
      } else {
        pastEventsHTML.push(
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.name}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>{event.location}</TableCell>
            <TableCell>{event.startTime}</TableCell>
            <TableCell className="text-right flex justify-end gap-x-3">
              <Button size="sm" variant="outline" asChild>
                <Link href={`/events/${event.id}`}>More Details</Link>
              </Button>
              {/* Able to request cert when it is false */}
              {!events.reqCert && (
                <RequestCert userId={session?.user?.id} eventId={event.id} />
              )}
            </TableCell>
          </TableRow>
        );
      }
    });
  }
  return (
    <div className="w-full">
      <div className="head_text text-center mb-16 orange_gradient">
        My Events
      </div>
      <div>
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
                  <TableHead>More Details</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{upcomingEventsHTML}</TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-7">
          <div className="font-bold text-lg mb-5 text-center text-gray-700">
            Past Events
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
              <TableBody>{pastEventsHTML}</TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
