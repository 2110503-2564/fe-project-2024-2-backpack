"use client";
import { Searchbar, SmallSearchbar } from "./BarComponents";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // State Variables for Filters
    const [searchName, setSearchName] = useState("");
    const [searchLoc, setSearchLoc] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchStart, setSearchStart] = useState("");
    const [searchEnd, setSearchEnd] = useState("");
    const [searchProj, setSearchProj] = useState(false);
    const [searchWB, setSearchWB] = useState(false);
    const [searchTV, setSearchTV] = useState(false);
    const [searchSpeaker, setSearchSpeaker] = useState(false);

    // Handle Search Button Click
    const handleSearch = () => {
        const params = new URLSearchParams(searchParams?.toString());

        if (searchName?.trim()) params.set("name", searchName.trim());
        if (searchLoc?.trim()) params.set("location", searchLoc.trim());
        if (searchDate?.trim()) params.set("date", searchDate.trim());
        if (searchStart?.trim()) params.set("startTime", searchStart.trim());
        if (searchEnd?.trim()) params.set("endTime", searchEnd.trim());

        // Navigate with Query Params
        router.push(`/coworkingspaces/?${params.toString()}`);
    };

    return (
        <div className="flex flex-col w-[350px] h-[90vh] p-8 gap-b-4 bg-linear-to-t
         from-cyan-400 via-50% via-white to-white mt-[10vh] z-50 fixed top-0 left-0">
            <div className="text-black text-3xl mb-4 font-bold text-center">
                Filter And Search
            </div>

            <div className="border-8 border-blue-900 h-full w-full rounded-3xl py-3 px-5 space-y-4 bg-linear-to-t from-blue-700 to-blue-300">
                <Searchbar
                    img="/img/searchIcon.svg"
                    text="Search by coworking space name..."
                    setValue={setSearchName}
                />
                <Searchbar
                    img="/img/locationIcon.svg"
                    text="Search by location... ex) Ratchathewi"
                    setValue={setSearchLoc}
                />
                <Searchbar
                    img="/img/dateIcon.svg"
                    type="date"
                    text="Day of reservation.."
                    setValue={setSearchDate}
                />
                <div className="flex flex-row items-center">
                    <SmallSearchbar text="Start Time..." setValue={setSearchStart} />
                    <h1 className="text-black text-[16px] font-bold mx-2 [-webkit-text-stroke:0.2px_white]">
                        to
                    </h1>
                    <SmallSearchbar text="End Time..." setValue={setSearchEnd} />
                </div>

                <button
                    onClick={handleSearch}
                    className="cursor-pointer border-white border-4 rounded-md text-center font-bold font-stretch-125% w-full h-11 text-bold"
                    style={{ backgroundImage: "var(--color-rainbow)" }}
                >
                    SEARCH
                </button>
            </div>
        </div>
    );
}
