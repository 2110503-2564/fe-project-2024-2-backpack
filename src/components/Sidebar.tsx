"use client"
import { Searchbar, SmallSearchbar, BarCheckBox } from "./BarComponents";
import { useState } from "react";
import Link from "next/link";
export default function Sidebar() {

    // set variable
    const [searchName, setSearchName] = useState(null);
    const [searchLoc, setSearchLoc] = useState(null);
    const [searchDate, setSearchDate] = useState(null);
    const [searchStart, setSearchStart] = useState(null);
    const [searchEnd, setSearchEnd] = useState(null);
    const [searchProj, setSearchProj] = useState(false);
    const [searchWB, setSearchWB] = useState(false);
    const [searchTV, setSearchTV] = useState(false);
    const [searchSpeaker, setSearchSpeaker] = useState(false);


    return (
        <div className="flex flex-col w-[350px] h-[90vh] p-8 gap-b-4 bg-linear-to-t
         from-cyan-400 via-50% via-white to-white mt-[10vh] z-50 fixed top-0 left-0">
            <div className="text-black text-3xl mb-4 font-bold text-center">Filter And Search</div>
            <div className="border-8 border-blue-900 h-full w-full rounded-3xl py-3 px-5 space-y-4 bg-linear-to-t from-blue-700 to-blue-300">

                <Searchbar img="/img/searchIcon.svg" text="search by coworking space name..." setValue={setSearchName} />
                <Searchbar img="/img/locationIcon.svg" text="search by location... ex) Ratchathewi" setValue={setSearchLoc} />
                <Searchbar img="/img/dateIcon.svg" text="Day of reservation.." setValue={setSearchDate} />
                <div className="flex flex-row items-center">
                    <SmallSearchbar img="/img/timeIcon.svg" text="Time..." setValue={setSearchStart} />
                    <h1 className="text-black text-[16px] font-bold mx-2 [-webkit-text-stroke:0.2px_white]">to</h1>
                    <SmallSearchbar img="/img/timeIcon.svg" text="Time..." setValue={setSearchEnd} />
                </div>

                <div className="bg-white p-3 rounded-2xl flex-auto max-h-full">
                    <div className="font-bold text-center text-lg">FACILITIES !!! :O</div>

                    <BarCheckBox text="Projector" id="projector" setValue={setSearchProj} />
                    <BarCheckBox text="White Board" id="whiteBoard" setValue={setSearchWB} />
                    <BarCheckBox text="LED TV" id="ledTV" setValue={setSearchTV} />
                    <BarCheckBox text="Speaker" id="speaker" setValue={setSearchSpeaker} />
                </div>
                <Link href="/coworkingspaces/">
                    <button className="cursor-pointer border-white border-4 rounded-md text-center font-bold font-stretch-125% w-full h-11 text-bold"
                        style={{ backgroundImage: "var(--color-rainbow)" }}>SEARCH</button>
                </Link>

            </div>

        </div >
    )

}