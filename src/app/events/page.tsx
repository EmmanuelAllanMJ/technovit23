import Events from "@/components/Events";
import React from "react";

const EventsPage = () => {
  return (
    <div className="bg-black">
      <img
        src="/assets/events-bg.png"
        className="h-screen w-screen object-cover blur-1xl"
        alt="Background"
      />
      <Events />
    </div>
  );
};

export default EventsPage;
