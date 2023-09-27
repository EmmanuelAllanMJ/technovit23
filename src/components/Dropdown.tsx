import React, { useState } from "react";
import { RiArrowDropDownLine, RiCloseLine } from "react-icons/ri";

interface CustomDropdownProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    onSelect(value);
    toggleDropdown();
  };

  return (
    <div className="w-96  mr-2 ">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-white flex justify-between items-center bg-opacity-40 h-16 rounded-full py-3 px-3 w-full text-left font-regular text-lg"
        >
          {selectedValue !== "" ? selectedValue : label}
          {isOpen ? (
            <RiCloseLine size={30} />
          ) : (
            <RiArrowDropDownLine size={30} />
          )}
        </button>
        {isOpen && (
          <div className="absolute bg-white/90 text-black rounded mt-2 py-2 px-3 w-full">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="cursor-pointer hover:bg-purple-500/10 py-1 px-2 rounded"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
