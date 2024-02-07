import CreateEvents from "@/components/dashboard/events/createEvent";
import React from "react";

const createEvents = () => {
  return (
    <div>
      <div className="font-bold text-lg mb-5 text-center text-red-400">
        Create New Events
      </div>
      <div>
        <CreateEvents />
      </div>
    </div>
  );
};

export default createEvents;
