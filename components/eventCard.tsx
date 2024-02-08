import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn, MdCalendarMonth } from "react-icons/md";

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
    <Link href={`/events/${event.id}`}>
      <Card className="min-w-[400px]">
        <CardHeader className="relative w-full aspect-[16/9]">
          <Image src="/future1.jpg" alt="picture" fill />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{event.name}</div>
          <div className="border-solid w-full border-black border"></div>
          <div className="flex gap-x-2 items-center my-2">
            <MdLocationOn />
            <p className="font-semibold">{event.location}</p>
          </div>
          <div className="flex gap-x-2 items-center my-2">
            <MdCalendarMonth />
            <p>{event.date}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
