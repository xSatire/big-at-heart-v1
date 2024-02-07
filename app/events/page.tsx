import React from "react";
import { getAllUpcomingEvents } from "@/data/events";
import EventCard from "@/components/eventCard";

const eventPages = async () => {
  const events = await getAllUpcomingEvents();
  const eventHTML = events?.map((event) => {
    return <EventCard event={event} key={event.id} />;
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-7">
        {eventHTML ? eventHTML : "There are no upcoming events"}
      </div>
    </div>
  );
};

export default eventPages;
