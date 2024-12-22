import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Blue Backdrop */}
      <div className="bg-[#F3FAFB] h-[338px] relative" />
      <Navbar />
      <div className="w-full">
        <Image
          src="/MapPin.png"
          height={200}
          width={200}
          alt="3d Icon of a Map Pin"
          className="absolute top-[107px] right-[calc(50%-100px)]"
        />
      </div>

      <p className="font-bold text-[32px] absolute top-[216px] w-full text-center">
        Track Your Order
      </p>
    </>
  );
}
