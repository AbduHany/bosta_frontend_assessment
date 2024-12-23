import Image from "next/image";
import Navbar from "../components/Navbar";
import { getDictionary } from "./dictionaries";
import MapPin from "@/public/MapPin.png";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return {
    title: lang === "en" ? "Track Your Order" : "تتبع طلبك",
    description:
      lang === "en"
        ? "All order updates will be available through this link."
        : "ستكون جميع تحديثات الطلب متاحة عبر هذا الرابط.",
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Getting the selected language
  const { lang } = await params;
  const t = await getDictionary(lang as "en" | "ar");

  return (
    <>
      {/* Blue Backdrop */}
      <div className="bg-[#F3FAFB] h-[338px] relative" />
      <Navbar lang={lang} messages={t} />
      <div className="w-full">
        <Image
          src={MapPin}
          height={200}
          width={200}
          alt="3d Icon of a Map Pin"
          className="absolute top-[136px] right-[calc(50%-100px)]"
        />
        <div className="absolute top-[216px] w-full text-center">
          <h1 className="font-bold text-[32px]">{t.hero.title}</h1>
          <p className="mt-2 sm:hidden px-2">{t.hero.description}</p>
        </div>
      </div>
    </>
  );
}
