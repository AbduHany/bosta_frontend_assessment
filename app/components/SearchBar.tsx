import { DictionaryType } from "@/types/dictionaryType";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

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
  const [tempTrackingID, setTempTrackingID] = useState<string>(trackingID);
  async function handleSearch(trackingID: string) {
    if (!trackingID) {
      toast.error(messages.errorMessages.missingTrackingID, {
        richColors: true,
        position: "bottom-right",
      });
      return;
    }
    window.location.href = `/${lang}?trackingid=${trackingID}`;
    setTrackingID(trackingID);
  }
  return (
    <div className={`flex ${lang === "en" ? "" : "flex-row-reverse"}`}>
      {/* Search Button */}
      <button onClick={() => handleSearch(tempTrackingID)}>
        <div
          className={`bg-[#E30613] w-[44px] h-[48px] sm:w-[60px] sm:h-[68px] shadow-lg relative ${
            lang === "en" ? "rounded-l-2xl" : "rounded-r-2xl"
          }`}
        >
          <Search className="text-white size-5 sm:size-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>

      {/* Input Field */}
      <input
        dir={lang === "en" ? "ltr" : "rtl"}
        placeholder={messages.searchbar.placeholder}
        className={`border-2 px-2 h-[50px] sm:p-[20px] sm:w-[395px] sm:h-[68px] sm:shadow-lg ${
          lang === "en"
            ? "rounded-r-xl sm:rounded-r-2xl"
            : "rounded-l-xl sm:rounded-l-2xl"
        }`}
        onChange={(e) => setTempTrackingID(e.target.value)}
        value={tempTrackingID}
      />
    </div>
  );
};

export default SearchBar;
