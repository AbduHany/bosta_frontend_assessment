import { DictionaryType } from "@/types/dictionaryType";
import Image from "next/image";
import React from "react";
import MapPin from "@/public/MapPin.png";
import SearchBar from "./SearchBar";

const HeroSection = ({
  lang,
  messages,
  trackingID,
  setTrackingID,
}: {
  lang: string;
  messages: DictionaryType;
  trackingID: string;
  setTrackingID: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-full">
      <Image
        src={MapPin}
        height={200}
        width={200}
        alt="3d Icon of a Map Pin"
        className="absolute top-[136px] right-[calc(50%-100px)]"
      />
      <div className="absolute top-[216px] w-full text-center">
        <h1 className="font-bold text-[32px]">{messages.hero.title}</h1>
        <p className="mt-2 sm:hidden px-2">{messages.hero.description}</p>
      </div>
      <div className="hidden sm:block absolute right-[calc(50%-228px)] top-[304px]">
        <SearchBar
          lang={lang}
          trackingID={trackingID}
          setTrackingID={setTrackingID}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default HeroSection;
