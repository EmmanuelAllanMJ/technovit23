import Events from "@/components/Events";
import React from "react";

const EventsPage = () => {
  return (
    <div className="bg-black bg-[url('/assets/events-bg.png')] overflow-hidden">
      <Events seemore={true} />
    </div>
  );
};

export default EventsPage;
