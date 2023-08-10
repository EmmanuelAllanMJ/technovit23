import React from "react";
import Card from "./card";
const Events = ({}) => {
  return (
    <div className=" font-monty">
      <div className="flex flex-row justify-center text-white  ">
        <span className="flex flex-row">
          <input
            className=" bg-stone-600 rounded-full wit py-3 px-3 mr-7 "
            type="search"
            placeholder="Search event name..."
          />

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            className=""
          >
            <path
              d="M21.9583 20.3333H20.8392L20.4425 19.9508C21.8788 18.2849 22.6682 16.158 22.6667 13.9583C22.6667 12.1371 22.1266 10.3568 21.1148 8.84246C20.103 7.32816 18.6648 6.1479 16.9822 5.45095C15.2996 4.75399 13.4481 4.57163 11.6619 4.92694C9.87564 5.28225 8.23487 6.15925 6.94706 7.44706C5.65925 8.73487 4.78225 10.3756 4.42694 12.1619C4.07163 13.9481 4.25399 15.7996 4.95095 17.4822C5.6479 19.1648 6.82816 20.603 8.34246 21.6148C9.85676 22.6266 11.6371 23.1667 13.4583 23.1667C15.7392 23.1667 17.8358 22.3308 19.4508 20.9425L19.8333 21.3392V22.4583L26.9167 29.5275L29.0275 27.4167L21.9583 20.3333ZM13.4583 20.3333C9.93084 20.3333 7.08334 17.4858 7.08334 13.9583C7.08334 10.4308 9.93084 7.58334 13.4583 7.58334C16.9858 7.58334 19.8333 10.4308 19.8333 13.9583C19.8333 17.4858 16.9858 20.3333 13.4583 20.3333Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg> */}
        </span>

        <div>
          <select className=" bg-stone-600 rounded-full py-3 px-3 w-36 h-12 mr-7 ">
            <option value="">Schools</option>
            <option value="School 1">QUBIT</option>
            <option value="School 2">Scope</option>
            <option value="School 3">Sense</option>
            <option value="School 4">School 4</option>
            <option value="School 5">School 5</option>
          </select>
        </div>
        <div>
          <select className=" bg-stone-600 rounded-full  py-3 px-3 w-34 h-12 mr-7 ">
            <option value="">Price</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div className="flex felx-row justify-center overflow-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="text-center">
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
