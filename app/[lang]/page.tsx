"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { getDictionary } from "./dictionaries";
import { DictionaryType } from "@/types/dictionaryType";

export default function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const [lang, setLang] = useState<string>("en");
  const [t, setT] = useState<DictionaryType | null>(null);
  const [trackingID, setTrackingID] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const { lang } = await params;
      setLang(lang);
      const dictionary = await getDictionary(lang as "en" | "ar");
      setT(dictionary);
    }
    fetchData();
  }, [params]);

  if (!t) return null; // or a loading spinner

  return (
    <>
      {/* Blue Backdrop */}
      <div className="bg-[#F3FAFB] h-[338px] relative" />
      <Navbar
        lang={lang}
        messages={t}
        trackingID={trackingID}
        setTrackingID={setTrackingID}
      />
      <HeroSection messages={t} />
    </>
  );
}
