"use client";
import Image from "next/image";
import React from "react";
import ArabicLogo from "@/public/Bosta Logo Arabic.png";
import EnglishLogo from "@/public/Bosta Logo English.png";

const Navbar = ({ lang }: { lang: string }) => {
  return (
    <div
      className={`flex w-full ${
        lang === "en" ? "flex-row-reverse" : ""
      } justify-around pt-10 absolute top-0`}
    >
      {/* Language Selector */}
      <div>
        <select
          className="w-[70px] text-sm font-bold bg-transparent"
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
      />
    </div>
  );
};

export default Navbar;
