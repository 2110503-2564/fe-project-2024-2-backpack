"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { YellowButton } from "./YellowButton";
import { EditMeetingRoom } from "./EditOverlay";
import { usePathname } from "next/navigation";
import { createReservation } from "@/libs/reservation";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { useSearchParams } from "next/navigation";
import { deleteMeetingRoom } from "@/libs/meetingRoom";
import { useNotice } from "./NoticeContext";

export default function MeetingRoomInfoCard({
  id,
  roomNumber,
  location,
  capacity,
  ledTV,
  projector,
  speaker,
  whiteBoard: whiteboard,
  reloadList,
}: {
  id: string;
  roomNumber: number;
  location: string;
  capacity: number;
  projector: boolean;
  whiteBoard: boolean;
  ledTV: boolean;
  speaker: boolean;
  reloadList: Function;
}) {
  const { token } = useSelector((state: RootState) => state.auth);
  const { showNotice } = useNotice();
  
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const startTime = searchParams.get("startTime");
  const endTime = searchParams.get("endTime");
  const reserveDateStart =
    date && startTime ? new Date(`${date}T${startTime}:00.000Z`) : undefined;
  const reserveDateEnd =
    date && endTime ? new Date(`${date}T${endTime}:00.000Z`) : undefined;
  const [imgSrc, setImgSrc] = useState(`/img/meetingRoom/${id}.png`);

  const pathname = usePathname();
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const removeFunction = async () => {
    // call DELETE api to remove this id from database
    if (token && token !== null) {
      const res = await deleteMeetingRoom(token, id);
      window.location.reload();
    } else {
      alert("token is goneee ??");
      return;
    }
  };

  useEffect(() => {
    if (isEditOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isEditOpen]);

  const handleReserveClick = async () => {
    if (!reserveDateStart || !reserveDateEnd || !token) {
      token?
      showNotice("Please provide all the necessary details."):
      showNotice("Please log in first");
      return;
    }
    try {
      await createReservation(token, id, reserveDateStart, reserveDateEnd);
      showNotice("Reservation created successfully!", true);
    } catch (error) {
      showNotice("Failed to create reservation: " + error);
    }
  };

  useEffect(() => {
    if (isEditOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isEditOpen]);

  return (
    <div className="w-full min-h-65 h-auto pl-14 pr-14 py-7 bg-white rounded-[30px] flex flex-row justify-start items-center flex-wrap content-start gap-2.5 overflow-hidden">
      <div className="min-w-full lg:min-w-2/5 min-h-60 h-auto lg:h-full relative rounded-[20px] overflow-hidden">
        <Image
          src={imgSrc}
          alt="meeting room"
          quality={100}
          className="bg-black w-full h-full object-cover"
          fill={true}
          onError={() => setImgSrc("/img/meetingRoom/default.png")} // Fallback to default image
        ></Image>
      </div>
      <div className="min-w-full lg:min-w-3/7 h-auto lg:h-full pl-3.5 pr-2.5 pt-6 pb-2.5 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
        <div className="w-full h-24 justify-start text-black text-base font-bold    leading-relaxed">
          Meeting room {roomNumber}
          <br />
          Location: {location}
          <br />
          Capacity: {capacity}
          <br />
          Facilities:
          <br />
        </div>
        <div className="w-full p-2.5 inl ine-flex justify- center items-cen ter gap-2.5 flex-wrap flex-col content-center overflow-hidden">
          <div className="justify-start text-black text-base font-bold leading-relaxed">
            Projector: {projector ? "✔" : "✘"}
          </div>
          <div className="justify-start text-black text-base font-bold leading-relaxed">
            White Board: {whiteboard ? "✔" : "✘"}
          </div>
          <div className="justify-start text-black text-base font-bold leading-relaxed">
            LED TV: {ledTV ? "✔" : "✘"}
          </div>
          <div className="justify-start text-black text-base font-bold leading-relaxed">
            Speaker: {speaker ? "✔" : "✘"}
          </div>
        </div>
      </div>
      <div className="min-w-full lg:min-w-1/10 h-auto lg:h-full flex flex-col items-center justify-center flex-grow">
        {pathname.search("/dashboard") !== -1 ? (
          <>
            <div className="flex-col flex space-y-4 mb-3">
              <YellowButton
                text="edit"
                clickto={() => setIsEditOpen(!isEditOpen)}
              />
              <YellowButton text="remove" clickto={removeFunction} />
            </div>
          </>
        ) : (
          <div className="transition-transform duration-300 hover:scale-150">
            <div className="cursor-pointer justify-start text-green-600 text-lg font-bold leading-relaxed">
              Reserve
            </div>
            <Image
              src="/img/bookingSymbol.svg"
              alt="booking"
              width="60"
              height="60"
              className="cursor-pointer h-auto"
              onClick={handleReserveClick}
            />
          </div>
        )}
      </div>

      {isEditOpen ? (
        <>
          <EditMeetingRoom
            id={id}
            closeOverlayWhenSubmit={() => setIsEditOpen(false)}
            reloadList={reloadList}
          />
          <button
            className="fixed inset-0 bg-black z-70 opacity-40"
            onClick={() => setIsEditOpen(false)}
          ></button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
