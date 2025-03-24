"use client"
import BookingCard from "@/components/BookingCard";
import { EditProfile } from "@/components/EditOverlay";
import { YellowButton } from "@/components/YellowButton";
import { useState, useEffect } from "react";

export default function DashbordUserBooking({
  params,
}: {
  params: { id: string };
}) {

    // profile edit
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  // to disable scrolling
  useEffect(() => {
    if (isEditOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
    }, [isEditOpen]);

  return (
    <main>
      <div className="h-auto min-h-[90vh] bg-linear-to-tl from-[#FF8800] to-[#FF0000]">
        <div className="relative self-stretch text-center justify-start text-black text-6xl font-bold leading-[162.28px] flex flex-row p-5">
          <div className="grid grid-cols-6 text-3xl p-3 flex-auto">
            <h2
              className="text-[#FF029A] mb-2 text-start"
              style={{
                textShadow:
                  "2px 0px 0px rgba(0, 0, 0, 1), -2px 0px 0px rgba(0, 0, 0, 1), 0px 4px 0px rgba(0, 0, 0, 1), 0px -2px 0px rgba(0, 0, 0, 1),2px -2px 0px rgba(0, 0, 0, 1), 3px 3px 0px rgba(0, 0, 0, 1), -3px 3px 0px rgba(0, 0, 0, 1), -2px -2px 0px rgba(0, 0, 0, 1), 0px 4px 9px rgba(0, 0, 0, 0.3)",
              }}
            >
              User id
            </h2>
            <div className="col-span-5 text-white font-normal">{params.id}</div>
            <h2
              className="text-[#FF029A] mb-2 text-start"
              style={{
                textShadow:
                  "2px 0px 0px rgba(0, 0, 0, 1), -2px 0px 0px rgba(0, 0, 0, 1), 0px 4px 0px rgba(0, 0, 0, 1), 0px -2px 0px rgba(0, 0, 0, 1),2px -2px 0px rgba(0, 0, 0, 1), 3px 3px 0px rgba(0, 0, 0, 1), -3px 3px 0px rgba(0, 0, 0, 1), -2px -2px 0px rgba(0, 0, 0, 1), 0px 4px 9px rgba(0, 0, 0, 0.3)",
              }}
            >
              Name
            </h2>
            <div className="col-span-5 text-white font-normal">{params.id}</div>
          </div>
          <div className="flex-auto w-auto h-auto grid items-start justify-end p-3">
            <YellowButton text="edit" clickto={() => setIsEditOpen(!isEditOpen)}/>
          </div>
        </div>
        <div className="p-5">
          <BookingCard
            reservationId="9179788cyghv89er9gvw0v8w"
            meetingRoomId="1"
            meetingRoomName="Meeting Room 1"
            coworkingSpaceName="Menacing Space"
            date="22 March 2025"
            startTime="11.00"
            endTime="12.00"
          />
        </div>
      </div>

        {
        isEditOpen? 
        <>
            <EditProfile id={params.id} closeOverlayWhenSubmit={() => setIsEditOpen(false)}/>
            <button className="fixed inset-0 bg-black z-70 opacity-40"
            onClick={() => setIsEditOpen(false)}></button>
        </>
        : ""  
        }

    </main>
  );
}
