import React from "react";
import Card from "./card";
const Events = ({ }) => {
  return (
    <div className=" font-monty">
      <div className="flex justify-center text-white px-12 py-7 ">
        <div className="w-full md:w-auto md:flex-grow-0 md:mr-7">
          <input
            className="bg-stone-600 rounded-full py-3 px-3 w-full md:w-auto"
            type="search"
            placeholder="Search event name..."
          />
        </div>

        <div className="w-full md:w-auto md:flex-grow-0 md:mr-7">
          <select className="bg-stone-600 rounded-full py-3 px-3 w-full md:w-auto">
            <option value="">Schools</option>
            <option value="School 1">QUBIT</option>
            <option value="School 2">Scope</option>
            <option value="School 3">Sense</option>
            <option value="School 4">School 4</option>
            <option value="School 5">School 5</option>
          </select>
        </div>

        <div className="w-full md:w-auto md:flex-grow-0">
          <select className="bg-stone-600 rounded-full py-3 px-3 w-full md:w-auto">
            <option value="">Price</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center overflow-auto md:px-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center ">
        <button
          type="submit"
          className="py-7 px-12 text-white border-white border-2 rounded-full text-2xl"
        >
          <div className="flex flex-row">
            See More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 40 40"
              fill="none"
              className="ml-5"
            >
              <path
                d="M28.2324 30.5174L38.75 19.9999L28.2324 9.48242L26.4647 11.2502L33.9645 18.75H1.30969V21.25H33.9643L26.4647 28.7496L28.2324 30.5174Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Events;
