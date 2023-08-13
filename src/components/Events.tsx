"use client";
import React, { useState, useEffect } from "react";
import Card from "./card";
import CustomDropdown from "./Dropdown";

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
];

const Events: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

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
      <div className="">
        <div className="flex justify-center items-center ">
          <section className="md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase">
            EVENTS
          </section>
        </div>
        <div className="font-monty ml-3 ">
          <div className="flex justify-center items-center text-white py-7 gap-2 mb-8">
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
            <div className="flex w-full xs-w-1/4 sm:w-1/2 mr-3 md:w-1/2 lg-w-1/2 ">
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
          <div className="flex flex-wrap justify-center items-center overflow-auto md:px-6">
            {filteredEvents.length === 0 ? (
              <p className="text-white text-center py-10">
                NO EVENTS AVAILABLE
              </p>
            ) : (
              filteredEvents.map((event) => (
                <Card
                  key={event.eventName}
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
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
