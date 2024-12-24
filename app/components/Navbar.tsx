"use client";
import Image from "next/image";
import React from "react";
import ArabicLogo from "@/public/Bosta Logo Arabic.png";
import EnglishLogo from "@/public/Bosta Logo English.png";
import { Search } from "lucide-react";
import { DictionaryType } from "@/types/dictionaryType";
import SearchBar from "./SearchBar";

const Navbar = ({
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
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="pt-10 px-4 flex flex-col gap-4 justify-center items-center absolute top-0 w-full">
      <div
        className={`flex justify-around  gap-2 items-center w-full ${
          lang === "en" ? "flex-row-reverse" : ""
        } `}
      >
        {/* Language Selector */}
        <div
          className={`flex gap-2 items-center ${
            lang === "en" ? "" : "flex-row-reverse"
          }`}
        >
          {/* Modal for small screens */}
          <button className="sm:hidden" onClick={() => setShowModal(true)}>
            <Search className="w-[30px]" />
          </button>
          {showModal && (
            <div
              className="sm:hidden fixed inset-0 top-[80px] flex items-start z-10 justify-center"
              onClick={() => setShowModal(false)}
            >
              <div
                className="bg-white p-[20px] rounded border-2"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="mb-2" dir={`${lang === "en" ? "ltr" : "rtl"}`}>
                  {messages.searchbar.modalMessage}
                </p>
                <SearchBar
                  messages={messages}
                  lang={lang}
                  trackingID={trackingID}
                  setTrackingID={setTrackingID}
                />
              </div>
            </div>
          )}
          <select
            className="w-full text-sm font-bold bg-transparent"
            onChange={(e) => {
              const urlParams = new URLSearchParams(window.location.search);
              const newUrl = new URL(window.location.href);
              newUrl.pathname = `/${e.target.value}`;
              newUrl.search = urlParams.toString();
              window.location.href = newUrl.toString();
            }}
            defaultValue={lang}
          >
            <option value="ar" className="font-bold">
              عربي
            </option>
            <option value="en" className="font-bold">
              English
            </option>
          </select>
        </div>

        {/* Logo */}
        <Image
          src={lang === "en" ? EnglishLogo : ArabicLogo}
          alt="logo"
          width={100}
          height={100}
          className="min-w-[100px] h-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
