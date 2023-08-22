"use client";
import type { Event } from "@/hooks/getEvents";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomDropdown from "./Dropdown";
import EventCard from "./EventCard";

interface EventsProps {
  seemore?: boolean;
}
interface IJSONReponse {
  data: {
    eventContentCollection: {
      items: Event[];
    };
  };
}

const Events: React.FC<EventsProps> = ({ seemore }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>();
  const [seem, setSeem] = useState(0);
  const [mesg, setMesg] = useState("See More");
  const router = useRouter();

  useEffect(() => {
    const query = `
  query {
    eventContentCollection {
      items {
        eventName
        school
        description
        venue
        price
        datetime
        imageLink
        link
      }
    }
  }
`;
    const fetchEvents = async () => {
      const res = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/fh8dptt5f1p3/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer PfIiyQLVPV1qip8E8fz_fjEQKt1VClDImjAg2eCwo64`,
          },
          body: JSON.stringify({ query }),
        }
      );
      const data: IJSONReponse = await res.json();
      setEvents(data.data.eventContentCollection.items);
    };
    fetchEvents();

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

    const filtered = events.filter(
      (event: Event) =>
        matchesSearch(event.eventName) &&
        matchesSchool(event.school) &&
        matchesPrice(event.price)
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

  const handleSchoolSelect = (value: string) => {
    setSelectedSchool(value);
  };

  const handlePriceSelect = (value: string) => {
    setSelectedPrice(value);
  };

  return (
    <>
      <section className="relative min-h-screen" id="events">
        <img
          src="/assets/events-bg.png"
          className="h-full w-screen object-cover blur-1xl absolute top-0 left-0 z-0"
          alt="Background"
        />

        <div className="flex justify-center items-center relative z-10">
          <section className="pt-4 md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase">
            EVENTS
          </section>
        </section>
        <section className="font-monty relative z-10">
          <section className="flex justify-center items-center text-white py-7 gap-2 mb-8 w-3/4 sm:w-5/6 mx-auto ">
            {/* Search Bar */}
            <section className="flex w-full h-16 xs:w-1/4 sm:w-1/2 md:w-1/2 lg-w-1/2">
              <input
                className="bg-white bg-opacity-40 rounded-full py-3 px-3 w-full"
                type="search"
                placeholder="Search Event Name..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </section>

            {/* School Dropdown */}
            <section className="flex z-10 w-full xs-w-1/4 sm:w-1/2 mr-3 md:w-1/2 lg-w-1/2 ">
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
            </section>
          </section>

          <section className="flex flex-wrap justify-center items-center gap-7">
            {filteredEvents!?.length === 0 ? (
              <p className="text-white text-center py-10">
                NO EVENTS AVAILABLE
              </p>
            ) : seem === 0 ? (
              filteredEvents!?.map((event, index) =>
                index <= 3 ? (
                  <EventCard
                    key={index}
                    index={index}
                    eventName={event.eventName}
                    eventImage={event.imageLink}
                    eventDescription={event.description}
                    eventSchool={event.school}
                    eventPrice={event.price}
                  />
                ) : (
                  ""
                )
              )
            ) : (
              filteredEvents!?.map((event, index) => (
                <EventCard
                  key={index}
                  index={index}
                  eventName={event.eventName}
                  eventImage={event.imageLink}
                  eventDescription={event.description}
                  eventSchool={event.school}
                  eventPrice={event.price}
                />
              ))
            )}
          </section>

          <section className="flex justify-center items-center text-center mb-4">
            <button
              className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-52
            h-16 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-16 flex justify-center 
            items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
            bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"
              onClick={seemore ? more : () => router.push("/events")}
            >
              {mesg}
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Events;
