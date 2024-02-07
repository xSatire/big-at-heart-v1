import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const EventCard = ({ event }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-square">
          <Image src="/volunteering3.jpg" alt="picture" fill />
        </div>
        <div>
          <div>Date: {event.date}</div>
          <div>Start Time: {event.startTime}</div>
          <div>End Time: {event.EndTime}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild className="bg-blue-400 right">
          <Link href={`/events/${event.id}`}>More Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
