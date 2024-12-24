"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import { getDictionary } from "./dictionaries";
import { DictionaryType } from "@/types/dictionaryType";
import { Toaster } from "sonner";
import ShipmentDetails from "../components/ShipmentDetails";

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
      const urlParams = new URLSearchParams(window.location.search);
      setTrackingID(urlParams.get("trackingid") || "");

      const { lang } = await params;
      setLang(lang);
      const dictionary = await getDictionary(lang as "en" | "ar");
      setT(dictionary);
    }
    fetchData();
  }, [params, trackingID]);

  if (!t) return null; // or a loading spinner

  return (
    <>
      <Toaster />
      {/* Blue Backdrop */}
      <div className="bg-[#F3FAFB] h-[338px] relative" />
      <Navbar
        lang={lang}
        messages={t}
        trackingID={trackingID}
        setTrackingID={setTrackingID}
      />
      <HeroSection
        lang={lang}
        messages={t}
        trackingID={trackingID}
        setTrackingID={setTrackingID}
      />
      <ShipmentDetails trackingID={trackingID} messages={t} />
    </>
  );
}
