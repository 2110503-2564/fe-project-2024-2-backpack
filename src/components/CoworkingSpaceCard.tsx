"use client";
import { BlueButton } from "@/components/BlueButton";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { useState } from "react";

export default function CoworkingSpaceCard({
  id,
  name,
  location,
  about,
  openinghours,
}: {
  id?: string;
  name: string;
  location: string;
  about: string;
  openinghours: string;
}) {
  if (!id) id = "1";
  const searchParams = useSearchParams(); // Get the current query parameters
  const [imgSrc, setImgSrc] = useState(`/img/coworkingSpace/${id}.png`);

  return (
    <div className="w-full h-auto px-5 py-5 bg-white rounded-[31px] outline outline-2 outline-offset-[-2px] outline-zinc-400 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch justify-start text-center text-black text-2xl font-bold leading-loose">
        {name}
      </div>
      <div className="w-full lg:inline-flex justify-start items-center gap-2.5">
        <div className="min-w-full lg:min-w-3/5 min-h-72 h-auto lg:h-full relative rounded-[20px] overflow-hidden">
          <Image
            src={imgSrc}
            alt="coworking space"
            quality={100}
            className="bg-black w-full h-full object-cover"
            fill={true}
            onError={() => setImgSrc("/img/coworkingSpace/default.png")} // Fallback to default image
          ></Image>
        </div>
        <div className="min-w-full lg:min-w-2/5 h-auto p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="h-1/4 p-2 bg-stone-100 rounded-[20px] self-stretch justify-start text-neutral-600 text-base font-normal leading-tight flex items-center gap-2">
            <Image
              src="/img/locationIcon.svg"
              className="objectfit-auto w-5 h-5"
              alt="icon"
              width={360}
              height={360}
            />

            {location}
          </div>
          <div className="h-1/4 self-stretch justify-start text-neutral-600 text-base font-normal leading-tight flex items-center gap-2">
            {about}
          </div>
          <div className="h-1/4 p-2 gap-2.5 self-stretch justify-start text-neutral-600 text-base font-normal leading-tight flex items-center gap-2">
            <Image
              src="/img/timeIcon.svg"
              className="objectfit-auto w-5 h-5"
              alt="icon"
              width={360}
              height={360}
            />
            Opening hours:
            <br /> {openinghours}
          </div>
          <div className="h-auto w-full">
            <Link
              href={{
                pathname: `/coworkingspaces/${id}/meetingrooms`,
                query: Object.fromEntries(searchParams), // Pass the query params
              }}
            >
              <BlueButton text="view meeting rooms"></BlueButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
