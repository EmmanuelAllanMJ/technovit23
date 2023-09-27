"use client";
import type { Event } from "@/hooks/getEvents";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import CustomDropdown from "./Dropdown";
import EventCard from "./EventCard";
import useEvents from "@/hooks/getEvents";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import debounce from 'lodash.debounce'
import { getEventFilter } from "@/hooks/getEventFilter";


interface EventsProps {
  seemore?: boolean;
  events: Event[];
  featured?: boolean;
}
interface IJSONReponse {
  data: {
    eventContentCollection: {
      items: Event[];
    };
  };
}



const Events: React.FC<EventsProps> = ({ seemore, events, featured }) => {

  events = events.filter((event) => event.featuredEvents === featured);
  // get each school
  const uniqueSchools = ["Qubit", "BandVIT", "Diseno", "VSplash", "Vitness", "Srishti", "Lilacs", "Taikuun", "Central Committee", "Glitz", "ConnectiVITieee"]
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [seem, setSeem] = useState(0);
  const [mesg, setMesg] = useState("See More");
  const router = useRouter();
  const event_hook = useEvents(setLoading);


  useEffect(() => {
    // This effect runs whenever event_hook changes.
    // It updates the filteredEvents whenever events change.
    setFilteredEvents(events); // Set filtered events to all events.
    setLoading(false); // Mark loading as complete.
  }, [event_hook]);
  useEffect(() => {
    const matchesSearch = (eventName: string) =>
      eventName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSchool = (eventSchool: string) =>
      selectedSchool === "" || eventSchool === selectedSchool;

    const matchesDate = (eventDate: string) => {
      if (!selectedDate) {
        return true; // If no date is selected, show all events.
      }

      const currentDate = new Date(selectedDate.toDateString());
      const eventDateObj = new Date(eventDate);

      return eventDateObj.toDateString() === currentDate.toDateString();
    };


    const filtered = event_hook.filter(
      (event: Event) =>
        matchesSearch(event.eventName) &&
        matchesSchool(event.school) &&
        matchesDate(event.datetime)
    );

    setFilteredEvents(filtered);
  }, [searchQuery, selectedSchool, selectedDate]);
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

  const handleSchoolSelect = async (value: string) => {
    setSelectedSchool(value);
    const events = await getEventFilter({school:value})
    console.log("Events", JSON.stringify(events))
    setFilteredEvents(events.data.eventContentCollection.items);
  };


  // Debounce
  async function refetch() {
    const events = await getEventFilter({school:selectedSchool})
    setFilteredEvents(events)
    console.log("Filtered", events)
  }
  const request = debounce(async () => {
    await refetch()
  }, 500)

  const debounceRequest = useCallback(() => {
    request()
  }, [])


  if (loading) {
    return <>Loading ...</>;
  } else {
    return (
      <>
        <section className="relative min-h-screen" id="events">
          <img
            src="/assets/events-bg.svg"
            className="h-full w-screen object-cover blur-1xl absolute top-0 left-0 z-0"
            alt="Background"
          />

          <div className="flex justify-center items-center relative z-9">
            <section className="pt-4 md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white">
              {featured && "Featured"} Events
            </section>
          </div>
          <section className="font-monty relative z-9 w-full flex flex-col items-center justify-center">
            <section className="flex justify-center sm:flex-col md:flex-row w-full lg:flex-row items-center text-white py-7 gap-2 mb-8 lg:w-3/4 md:w-3/4 sm:w-5/6 mx-auto ">
              {/* Search Bar */}
              <section className="flex w-full h-16 md:w-1/2 lg-w-1/2">
                <input
                  className="bg-white bg-opacity-40 rounded-full py-3 px-3 w-full"
                  type="search"
                  placeholder="Search Event Name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </section>

              {/* School Dropdown */}
              <section className="flex flex-col md:flex-row lg:flex-row z-10 w-full items-start justify-center gap-2 md:mr-3 md:w-1/2 lg-w-1/2 ">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  placeholderText="Select Date"
                  dateFormat="MMMM d, yyyy"
                  isClearable
                  className="bg-white font-monty bg-opacity-40 rounded-full py-5 px-3 w-full"
                  wrapperClassName="w-full"
                />

                <CustomDropdown
                  label="Select School"
                  options={[
                    { value: "", label: "All Schools" },
                    ...uniqueSchools.map((school) => ({
                      value: school,
                      label: school,
                    })),
                  ]}
                  selectedValue={selectedSchool}
                  onSelect={handleSchoolSelect}

                />

                {/* <button 
                className="bg-white font-monty bg-opacity-40 rounded-full py-5 px-3 w-full"
                >
                  Featured 
                </button> */}

              </section>
            </section>

            <section className="flex flex-wrap justify-center items-center gap-7">
              {filteredEvents?.length === 0 ? (
                <p className="text-white text-center py-10">
                  NO EVENTS AVAILABLE
                </p>
              ) : seem === 0 ? (
                filteredEvents?.map((event, index) => {
                  return (index <= 3 ? (
                    <EventCard
                      key={index}
                      index={index}
                      eventName={event.eventName}
                      eventImage={event.imageLink}
                      eventDescription={event.description}
                      eventSchool={event.school}
                      eventPrice={event.price}
                      Link={event.link}
                      DateTime={event.datetime}
                    />
                  ) : (
                    ""
                  ))
                }
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
                    Link={event.link}
                    DateTime={event.datetime}
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
  }
};

export default Events;
