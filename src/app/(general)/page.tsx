"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { getUserRole } from "@/libs/getUserRole";
import Image from "next/image";
import FirstMainPageCard from "@/components/FirstMainPageCard";
import NormalMainPageCard from "@/components/NormalMainPageCard";
import FinalMainPageCard from "@/components/FinalMainPageCard";

// Define the possible roles
type UserRole = "admin" | "user" | null;

export default function Home() {
  const { token, role } = useSelector((state: RootState) => state.auth);

  return (
    <main className="flex flex-col justify-center px-11 pt-11 pb-8 bg-linear-to-b from-[#EAFFE0] via-[#B3D757] to-[#FC0004]">
      <FirstMainPageCard />
      <NormalMainPageCard
        imgSrc="/img/jojo1.png"
        imgPosition="right"
        text="Ho.. You're in need of private coworking space's room? And you're
        approaching us Backpack? Do you know what you're getting yourself into?
        😈"
      />
      <NormalMainPageCard
        imgSrc="/img/normalCoworkingSpace.png"
        imgPosition="left"
        text="We ARE the BEST at providing coworking spaces and meeting rooms tailored to your needs. With a seamless and hassle-free booking system, we make it easy to secure a workspace whenever you need it."
      />
      <NormalMainPageCard
        imgSrc="/img/jojo2.png"
        imgPosition="right"
        text="Ho.. knowing all that instead of running away, you’re coming right to Backpack? Sure, TRY BOOKING A MEETING ROOM WITH US !!"
      />
      <FinalMainPageCard />
      <h2 className="text-[32px] text-white font-bold mt-11">
        Dora jojo meme by MomoAnimations
      </h2>
    </main>
  );
}
