"use server";
import EditEvents from "@/components/dashboard/events/editEvents/editEvents";
import { getEventById } from "@/data/events";
import React from "react";

const EventPage = async ({ params }: any) => {
  const { id } = params;
  let event;
  if (id) {
    event = await getEventById(id);
  }

  return (
    <div>
      <div>
        {event ? (
          <EditEvents
            id={id}
            name={event.name}
            date={event.date}
            location={event.location}
            startTime={event.startTime}
            endTime={event.EndTime}
            description={event.description}
            organizerContact={event.organizerContact}
            organizerName={event.organizerName}
            completed={event.completed}
          />
        ) : (
          <div>Item not found</div>
        )}
      </div>
    </div>
  );
};

export default EventPage;
