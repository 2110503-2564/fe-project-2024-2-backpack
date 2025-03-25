"use client";
import { Searchbar, SmallSearchbar } from "./BarComponents";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useNotice } from "@/components/NoticeContext";

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showNotice } = useNotice();

  // State Variables for Filters
  const [searchDate, setSearchDate] = useState("");
  const [searchStart, setSearchStart] = useState("");
  const [searchEnd, setSearchEnd] = useState("");

  // State for Notice Textbox
  const [noticeText, setNoticeText] = useState("");

  // Update noticeText whenever URL parameters change
  useEffect(() => {
    if (searchParams) {
      const date = searchParams.get("date") || "N/A";
      const start = searchParams.get("startTime") || "N/A";
      const end = searchParams.get("endTime") || "N/A";

      const newNotice = `Making reservation on Date: ${date} from ${start} to ${end}`;
      setNoticeText(newNotice);
    }
  }, [searchParams]); // Trigger on URL param change
  // Handle Search Button Click
  const handleSearch = () => {
    // If date, start, and end are not all filled, show an alert
    if (
      (searchDate && searchStart && searchEnd) ||
      (!searchDate && !searchStart && !searchEnd)
    ) {
      const params = new URLSearchParams();

      if (searchDate?.trim()) params.set("date", searchDate.trim());
      if (searchStart?.trim()) params.set("startTime", searchStart.trim());
      if (searchEnd?.trim()) params.set("endTime", searchEnd.trim());

      // Navigate with Query Params
      router.push(`/coworkingspaces/?${params.toString()}`);
    } else {
        showNotice( "Please fill in the Date, Start Time, and End Time together, or clear them all.");
        // "Please fill in the Date, Start Time, and End Time together, or clear them all.",
    }
  };
  // Handle Clear Button Click
  const handleClear = () => {
    // Clear all search parameters
    setSearchDate("");
    setSearchStart("");
    setSearchEnd("");
    // Refresh the page (reset URL query params)
    router.push("/coworkingspaces");
    router.refresh();
  };
  return (
    <div
      className="flex flex-col w-[350px] h-[90vh] p-8 gap-b-4 bg-linear-to-t
         from-cyan-400 via-50% via-white to-white mt-[10vh] z-50 fixed top-0 left-0"
    >
      <div className="text-black text-3xl mb-4 font-bold text-center">
        Reservation
      </div>

      <div className="border-8 border-blue-900 h-auto w-full rounded-3xl py-3 px-5 space-y-4 bg-linear-to-t from-blue-700 to-blue-300">
        <Searchbar
          img="/img/dateIcon.svg"
          type="date"
          text="Day of reservation.."
          value={searchDate} // Add value prop
          setValue={setSearchDate}
        />
        <div className="flex flex-row items-center">
          <SmallSearchbar
            text="Start Time..."
            value={searchStart} // Add value prop
            setValue={setSearchStart}
          />

          <h1 className="text-black text-[16px] font-bold mx-2 [-webkit-text-stroke:0.2px_white]">
            to
          </h1>
          <SmallSearchbar
            text="End Time..."
            value={searchEnd} // Add value prop
            setValue={setSearchEnd}
          />
        </div>

        <button
          onClick={handleSearch}
          className="cursor-pointer border-white border-4 rounded-md text-center font-bold font-stretch-125% w-full h-11 text-bold"
          style={{ backgroundImage: "var(--color-rainbow)" }}
        >
          SEARCH
        </button>
      </div>

      {/* Notice Textbox */}
      {noticeText && (
        <div className="mt-4 text-center text-black bg-yellow-300 p-2 rounded-md">
          {noticeText}
        </div>
      )}

      {/* Clear Button */}
      <button
        onClick={handleClear}
        className="cursor-pointer border-white border-4 rounded-md text-center font-bold font-stretch-125% w-full h-11 mt-4 bg-red-500 text-white"
      >
        CLEAR
      </button>
    </div>
  );
}
