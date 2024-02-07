import { getEventById } from "@/data/events";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { updateUserEvent } from "@/data/user";
import SignUpButton from "@/components/signUpButton";

const upcomingEventPage = async ({ params }: any) => {
  const { id } = params;
  const event = await getEventById(id);
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      {event ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="h-[30vh] md:h-[50vh] aspect-square col-span-1 relative">
            <Image src="/volunteering2.jpg" fill alt="Image" />
          </div>
          <div className="font-semibold font-satoshi">
            <div>Title: {event.name}</div>
            <div>Location: {event.location}</div>
            <div>Date: {event.date}</div>
            <div>Start Time: {event.startTime}</div>
            <div>End Time: {event.EndTime}</div>
            <div>Description: {event.description}</div>
            <div>Organizer Name: {event.organizerName}</div>
            <div>Organizer Contact: {event.organizerContact}</div>
            {!event.completed ? (
              <div className="mt-12">
                <SignUpButton userId={user?.id} eventId={id} />
              </div>
            ) : (
              <div className="mt-12 flex flex-col">
                <Button disabled={true}>Event has ended</Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-rose-400 text-2xl">404 No such event!</div>
      )}
    </div>
  );
};

export default upcomingEventPage;
