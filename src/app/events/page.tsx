import Events from "@/components/Events";
import React from "react";

const EventsPage = () => {
  return (
    <div className="bg-black relative about-grid pt-6">
      <img
        src="/assets/events-bg.png"
        className="h-screen w-screen object-cover blur-1xl absolute top-0 left-0 z-0"
        alt="Background"
      />
      <div className="relative z-10">
        <Events />
      </div>
    </div>
  );
};

export default EventsPage;
