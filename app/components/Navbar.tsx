"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<string>("en");
  return (
    <div
      className={`flex w-full ${
        language === "en" ? "flex-row-reverse" : ""
      } justify-around pt-10 absolute top-0`}
    >
      {/* Language Selector */}
      <div>
        <select
          className="w-[70px] text-sm font-bold bg-transparent"
          onChange={(e) => setLanguage(e.target.value)}
          defaultValue={"en"}
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
        src={
          language === "en"
            ? "/Bosta Logo English.png"
            : "/Bosta Logo Arabic.png"
        }
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Navbar;
