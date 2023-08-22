"use client";
import React, { useState, useEffect } from "react";
import CustomDropdown from "./Dropdown";
import EventCard from "./EventCard";
import { useRouter } from "next/navigation";

interface EventsProps {
  seemore?: boolean;
}

const eventsData = [
  {
    eventName: "Event Name 1",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 1",
    eventSchool: "Qubit",
    eventPrice: 75,
  },
  {
    eventName: "Event Name 2",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 2",
    eventSchool: "Scope",
    eventPrice: 50,
  },
  {
    eventName: "Event Name 3",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 3",
    eventSchool: "Sense",
    eventPrice: 100,
  },
  {
    eventName: "Event Name 4",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 4",
    eventSchool: "Qubit",
    eventPrice: 25,
  },
  {
    eventName: "Event Name 5",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 5",
    eventSchool: "Sense",
    eventPrice: 100,
  },
  {
    eventName: "Event Name 6",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 6",
    eventSchool: "Sense",
    eventPrice: 100,
  },
  {
    eventName: "Event Name 7",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 7",
    eventSchool: "Sense",
    eventPrice: 100,
  },
  {
    eventName: "Event Name 9",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 8",
    eventSchool: "Sense",
    eventPrice: 100,
  },{
    eventName: "Event Name 10",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 8",
    eventSchool: "Sense",
    eventPrice: 100,
  },{
    eventName: "Event Name 11",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 8",
    eventSchool: "Sense",
    eventPrice: 100,
  },{
    eventName: "Event Name 8",
    eventImage: "/assets/open.jpg",
    eventDescription: "Description of Event 8",
    eventSchool: "Sense",
    eventPrice: 100,
  },
];

const Events: React.FC<EventsProps> = ({seemore}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [seem, setSeem] = useState(0);
  const [mesg, setMesg] = useState("See More");
  const router = useRouter();

  useEffect(() => {
    const matchesSearch = (eventName: string) =>
      eventName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSchool = (eventSchool: string) =>
      selectedSchool === "" || eventSchool === selectedSchool;

    const matchesPrice = (eventPrice: number) => {
      if (selectedPrice === "") {
        return true;
      }
      if (selectedPrice === "Low") {
        return eventPrice <= 50;
      }
      if (selectedPrice === "Medium") {
        return eventPrice > 50 && eventPrice <= 100;
      }
      if (selectedPrice === "High") {
        return eventPrice > 100;
      }
    };

    const filtered = eventsData.filter(
      (event) =>
        matchesSearch(event.eventName) &&
        matchesSchool(event.eventSchool) &&
        matchesPrice(event.eventPrice)
    );

    setFilteredEvents(filtered);
  }, [searchQuery, selectedSchool, selectedPrice]);
  const more = () => {
    if (seem == 0) {
      setSeem(1);
      setMesg("See Less");
      return;
    } else {
      setSeem(0);
      setMesg("See More");
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSchoolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSchool(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

  const handleSchoolSelect = (value: string) => {
    setSelectedSchool(value);
  };

  const handlePriceSelect = (value: string) => {
    setSelectedPrice(value);
  };

  return (
    <>
      <div className="relative min-h-screen" id="events">
        <img
          src="/assets/events-bg.png"
          className="h-full w-screen object-cover blur-1xl absolute top-0 left-0 z-0"
          alt="Background"
        />
        <div className="flex justify-center items-center relative z-10">
          <section className="pt-4 md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase">
            EVENTS
          </section>
        </div>
        <div className="font-monty relative z-10">
          <div className="flex justify-center items-center text-white py-7 gap-2 mb-8 w-3/4 sm:w-5/6 mx-auto ">
            {/* Search Bar */}
            <div className="flex w-full h-16 xs:w-1/4 sm:w-1/2 md:w-1/2 lg-w-1/2">
              <input
                className="bg-white bg-opacity-40 rounded-full py-3 px-3 w-full"
                type="search"
                placeholder="Search Event Name..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* School Dropdown */}
            <div className="flex z-10 w-full xs-w-1/4 sm:w-1/2 mr-3 md:w-1/2 lg-w-1/2 ">
              <CustomDropdown
                label="Schools"
                options={[
                  { value: "", label: "All Schools" },
                  { value: "Qubit", label: "Qubit" },
                  { value: "Scope", label: "Scope" },
                  { value: "Sense", label: "Sense" },
                ]}
                selectedValue={selectedSchool}
                onSelect={handleSchoolSelect}
              />

              {/* Price Dropdown */}
              <CustomDropdown
                label="Price"
                options={[
                  { value: "", label: "Price" },
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
                selectedValue={selectedPrice}
                onSelect={handlePriceSelect}
              />
            </div>
          </div>

          {/* Display Filtered Events */}
          <div className="flex flex-wrap justify-center items-center gap-7">
            {filteredEvents.length === 0 ? (
              <p className="text-white text-center py-10">
                NO EVENTS AVAILABLE
              </p>
            ) : seem === 0 ? (
              filteredEvents.map((event, index) =>
                index <= 3 ? (
                  <EventCard
                    key={index}
                    index={index}
                    eventName={event.eventName}
                    eventImage={event.eventImage}
                    eventDescription={event.eventDescription}
                    eventSchool={event.eventSchool}
                    eventPrice={event.eventPrice}
                  />
                ) : (
                  ""
                )
              )
            ) : (
              filteredEvents.map((event,index) => (
                <EventCard
                  key={index}
                  index={index}
                  eventName={event.eventName}
                  eventImage={event.eventImage}
                  eventDescription={event.eventDescription}
                  eventSchool={event.eventSchool}
                  eventPrice={event.eventPrice}
                />
              ))
            )}
          </div>

          {/* "See More" Button */}
          <div className="flex justify-center items-center text-center mb-4">
            <button
              className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-52
            h-16 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-16 flex justify-center 
            items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
            bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"
              onClick={seemore ? more : ()=>router.push("/events")}
            >
              {mesg}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
