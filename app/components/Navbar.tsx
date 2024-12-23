"use client";
import Image from "next/image";
import React from "react";
import ArabicLogo from "@/public/Bosta Logo Arabic.png";
import EnglishLogo from "@/public/Bosta Logo English.png";
import { Search } from "lucide-react";
import { DictionaryType } from "@/types/dictionaryType";

const Navbar = ({
  lang,
  messages,
}: {
  lang: string;
  messages: DictionaryType;
}) => {
  return (
    <div className="pt-10 px-4 flex flex-col gap-4 justify-center items-center absolute top-0 w-full">
      <div
        className={`flex justify-around  gap-2 items-center w-full ${
          lang === "en" ? "flex-row-reverse" : ""
        } `}
      >
        {/* Language Selector */}
        <div>
          <select
            className="w-full text-sm font-bold bg-transparent"
            onChange={
              lang === "en"
                ? () => (window.location.href = "/ar")
                : () => (window.location.href = "/en")
            }
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

      {/* Search bar for smaller screens */}
      <div className="relative sm:hidden max-w-[400px] w-full">
        <input
          className={`rounded-md
            text-sm h-8 w-full border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${lang === "en" ? "pl-10" : "pr-10"}
            `}
          dir={`${lang === "en" ? "ltr" : "rtl"}`}
          placeholder={messages.searchbar.placeholder}
        />
        <button
          className={`absolute top-0 ${
            lang === "en" ? "left-2" : "right-2"
          } flex items-center justify-center w-8 h-8 text-gray-600 hover:text-blue-500`}
        >
          <Search className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
