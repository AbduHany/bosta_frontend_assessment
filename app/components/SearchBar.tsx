import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex ">
      <button>
        <div className="bg-[#E30613] w-[44px] h-[48px] sm:w-[60px] sm:h-[68px] shadow-lg relative rounded-l-2xl">
          <Search className="text-white size-5 sm:size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
      <input
        placeholder="Tracking No."
        className="border-2 px-8 h-[50px] sm:p-[20px] sm:w-[395px] sm:h-[68px] sm:shadow-lg rounded-r-xl sm:rounded-r-2xl"
      />
    </div>
  );
};

export default SearchBar;
