import { DictionaryType } from "@/types/dictionaryType";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = ({
  messages,
  lang,
  trackingID,
  setTrackingID,
}: {
  messages: DictionaryType;
  lang: string;
  trackingID: string;
  setTrackingID: React.Dispatch<React.SetStateAction<string>>;
}) => {
  async function handleSearch(trackingID: string) {
    console.log(trackingID);
    setTrackingID("");
  }
  return (
    <div className={`flex ${lang === "en" ? "" : "flex-row-reverse"}`}>
      <button onClick={() => handleSearch(trackingID)}>
        <div
          className={`bg-[#E30613] w-[44px] h-[48px] sm:w-[60px] sm:h-[68px] shadow-lg relative ${
            lang === "en" ? "rounded-l-2xl" : "rounded-r-2xl"
          }`}
        >
          <Search className="text-white size-5 sm:size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
      <input
        placeholder={messages.searchbar.placeholder}
        className={`border-2 pl-2 h-[50px] sm:p-[20px] sm:w-[395px] sm:h-[68px] sm:shadow-lg ${
          lang === "en"
            ? "rounded-r-xl sm:rounded-r-2xl"
            : "rounded-l-xl sm:rounded-l-2xl"
        }`}
        onChange={(e) => setTrackingID(e.target.value)}
        value={trackingID}
      />
    </div>
  );
};

export default SearchBar;
