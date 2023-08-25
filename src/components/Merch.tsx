import React, { useState, useEffect } from "react";
import CustomDropdown from "./Dropdown";
import MerchCard from "./MerchCard";
import { useRouter } from "next/navigation";

interface MerchProps {
  seemore?: boolean;
}

const merchData = [
  {
    merchName: "Hoody 1",
    merchImage: "/assets/open.jpg",
    merchCategory: "Hoody",
    merchSize: "M",
    merchPrice: 30,
  },
  {
    merchName: "Hoody 2",
    merchImage: "/assets/open.jpg",
    merchCategory: "Hoody",
    merchSize: "L",
    merchPrice: 35,
  },
  {
    merchName: "T-Shirt ",
    merchImage: "/assets/open.jpg",
    merchCategory: "T-Shirt",
    merchSize: "M",
    merchPrice: 20,
  },
  {
    merchName: "Pen 1",
    merchImage: "/assets/open.jpg",
    merchCategory: "Pen",
    merchSize: "One Size",
    merchPrice: 5,
  },
  {
    merchName: "Hoody 3",
    merchImage: "/assets/open.jpg",
    merchCategory: "Hoody",
    merchSize: "M",
    merchPrice: 30,
  },
  {
    merchName: "Hoody 4",
    merchImage: "/assets/open.jpg",
    merchCategory: "Hoody",
    merchSize: "L",
    merchPrice: 35,
  },
  {
    merchName: "Hoody 5",
    merchImage: "/assets/open.jpg",
    merchCategory: "Hoody",
    merchSize: "M",
    merchPrice: 30,
  },
  {
    merchName: "Hoody 6",
    merchImage: "/assets/open.jpg",
    merchCategory: "Hoody",
    merchSize: "L",
    merchPrice: 35,
  },
  {
    merchName: "T-Shirt 2",
    merchImage: "/assets/open.jpg",
    merchCategory: "T-Shirt",
    merchSize: "M",
    merchPrice: 20,
  },

];

const categories = [
  "Hoody",
  "T-Shirt",
  "Pen",
  // Add more categories as needed
];

const Merch: React.FC<MerchProps> = ({ seemore }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredMerch, setFilteredMerch] = useState(merchData);
  const [seem, setSeem] = useState(0);
  const [mesg, setMesg] = useState("See More");
  const router = useRouter();

  useEffect(() => {
    const matchesSearch = (merchName: string) =>
      merchName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = (merchCategory: string) =>
      selectedCategory === "" || merchCategory === selectedCategory;

    const matchesPrice = (merchPrice: number) => {
      if (selectedPrice === "") {
        return true;
      }
      if (selectedPrice === "Low") {
        return merchPrice <= 50;
      }
      if (selectedPrice === "Medium") {
        return merchPrice > 50 && merchPrice <= 100;
      }
      if (selectedPrice === "High") {
        return merchPrice > 100;
      }
    };

    const filtered = merchData.filter(
      (merch) =>
        matchesSearch(merch.merchName) &&
        matchesCategory(merch.merchCategory) &&
        matchesPrice(merch.merchPrice)
    );

    setFilteredMerch(filtered);
    setSeem(0);
    setMesg("See More");
  }, [searchQuery, selectedCategory, selectedPrice]);

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
          src="/assets/events-bg.png"
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
            MERCH
            <br/><br/>
          </section>
        </div>
        <div className="font-monty relative z-10">
          <div className="flex justify-center items-center text-white py-7 gap-2 mb-8 w-3/4 sm:w-5/6 mx-auto ">
            {/* Search Bar */}
            <div className="flex w-full h-16 xs:w-1/4 sm:w-1/2 md:w-1/2 lg-w-1/2">
              <input
                className="bg-white bg-opacity-40 rounded-full py-3 px-3 w-full"
                type="search"
                placeholder="Search Merch Name..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex z-10 w-full xs-w-1/4 sm:w-1/2 mr-3 md:w-1/2 lg-w-1/2 ">
              <CustomDropdown
                label="Category"
                options={[
                  { value: "", label: "Category" },
                  { value: "Hoody", label: "Hoddy" },
                  { value: "T-Shirt", label: "T-Shirt" },
                  { value: "Pen", label: "Pen" },
                ]}
                selectedValue={selectedCategory}
                onSelect={handleCategorySelect}
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

          {/* Display Filtered Merchs */}
          {categories.map((category) => {
            const categoryMerch = filteredMerch.filter(
              (merch) => merch.merchCategory === category
            );

            const visibleMerch = categoryMerch.slice(0, seem === 0 ? 4 : categoryMerch.length);

            return (
              <div key={category}>
                <h1 className="flex w-full tracking-widest justify-center bg-clip-text text-transparent bg-gradient-to-tl from-stone-600 to-white text-center mx-auto text-6xl md:text-4xl sm:text-4xl uppercase my-16">
                  {category}
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-7">
                  {visibleMerch.length === 0 ? (
                    <p className="text-white text-center py-10">
                      NO MERCHS AVAILABLE
                    </p>
                  ) : (
                    visibleMerch.map((merch, index) => (
                      <MerchCard
                        key={index}
                        index={index}
                        merchName={merch.merchName}
                        merchImage={merch.merchImage}
                        merchCategory={merch.merchCategory}
                        merchSize={merch.merchSize}
                        merchPrice={merch.merchPrice}
                      />
                    ))
                  )}
                </div>
                {categoryMerch.length > 4 && (
                  <div className="flex justify-center items-center text-center mb-4">
                    <button
                      className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-52
                  h-16 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-16 flex justify-center 
                  items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
                  bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"
                      onClick={more}
                    >
                      {mesg}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Merch;
