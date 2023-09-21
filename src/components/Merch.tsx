"use client"
import React, { useState, useEffect } from "react";
import CustomDropdown from "./Dropdown";
import MerchCard from "./MerchCard";
import { useRouter } from "next/navigation";
import { MerchProps } from "../../public/data/data";

interface MerchCompProps {
  seemore?: boolean;
  data : MerchProps[];
}

// const merchData = [
//   {
//     merchName: "Hoody 1",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Hoody",
//     merchSize: "M",
//     merchPrice: 30,
//   },
//   {
//     merchName: "Hoody 2",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Hoody",
//     merchSize: "L",
//     merchPrice: 35,
//   },
//   {
//     merchName: "T-Shirt ",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "T-Shirt",
//     merchSize: "M",
//     merchPrice: 20,
//   },
//   {
//     merchName: "Pen 1",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Pen",
//     merchSize: "One Size",
//     merchPrice: 5,
//   },
//   {
//     merchName: "Hoody 3",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Hoody",
//     merchSize: "M",
//     merchPrice: 30,
//   },
//   {
//     merchName: "Hoody 4",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Hoody",
//     merchSize: "L",
//     merchPrice: 35,
//   },
//   {
//     merchName: "Hoody 5",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Hoody",
//     merchSize: "M",
//     merchPrice: 30,
//   },
//   {
//     merchName: "Hoody 6",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "Hoody",
//     merchSize: "L",
//     merchPrice: 35,
//   },
//   {
//     merchName: "T-Shirt 2",
//     merchImage: "/assets/open.jpg",
//     merchCategory: "T-Shirt",
//     merchSize: "M",
//     merchPrice: 20,
//   },

// ];

const categories = [
  "Hoody",
  "T-Shirt",
  "Pen",
  // Add more categories as needed
];

const Merch: React.FC<MerchCompProps> = ({ seemore , data}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredMerch, setFilteredMerch] = useState(data);
  const [seem, setSeem] = useState(0);
  const [mesg, setMesg] = useState("See More");
  const router = useRouter();


  const more = () => {
    if (seem === 0) {
      setSeem(1);
      setMesg("See Less");
    } else {
      setSeem(0);
      setMesg("See More");
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
  };

  const handlePriceSelect = (value: string) => {
    setSelectedPrice(value);
  };

  return (
    <>
      <div className="relative min-h-screen" id="events">
        <img
          src="/assets/events-bg.svg"
          className="h-full w-screen object-cover blur-1xl absolute top-0 left-0 z-0"
          alt="Background"
        />
        <div className="absolute top-16 left-16 sm:left-0 sm:top-8 px-4 brightness-0 invert">
          <img
            src="/assets/vitlogo.png"
            alt="Left Logo"
            className="w-full h-10 lg:h-20 "
          />
        </div>
        <div className="absolute top-16 right-16 sm:right-0 sm:top-8 px-4">
          <img
            src="/assets/technovitlogo.png"
            alt="Right Logo"
            className="w-full h-10 lg:h-24"
          />
        </div>
        <div className="flex justify-center items-center relative z-10">
          <section className="pt-4 md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase">
            <br/><br/>
            MERCH
            <br/><br/>
          </section>
        </div>
        <div className="font-monty relative z-10 overflow-hidden ">
          {/* Display Filtered Merchs */}
          
                <div className="flex flex-wrap justify-center items-center gap-7 pb-10">
                  {data.length === 0 ? (
                    <p className="text-white text-center py-10">
                      NO MERCHS AVAILABLE
                    </p>
                  ) : (
                    data.map((merch, index) => (
                      <MerchCard
                        key={index}
                        merch={merch}
                        index={index}
                      />
                    ))
                  )}
                </div>
               
              </div>
            </div>
    </>
  );
};

export default Merch;
