"use client"
import AdminObjectCard from "@/components/AdminObjectCard"
import { useState } from "react"
import { EditMeetingRoom, EditProfile } from "@/components/EditOverlay";
import { YellowButton } from "@/components/YellowButton";
import DoraNextPrev from "@/components/DoraPrevNext";

export default function DashboardMeetingrooms () {

    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [clickId, setClickId] = useState<string>("");
    const clickEdit = (itid:string) => {
        setIsEditOpen(!isEditOpen);
        setClickId(itid);
    }

    const removeFunction = () => {
        // call DELETE api to remove this id from database
    }

    return (
        <main className="pb-50 pt-3">
            <div className="w-(calc[100vw-35opx]) flex justify-center">
                <YellowButton text="New"/>
            </div>
            
            <DoraNextPrev/>
            
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" coid="92urf924uruf0w9yf02" coname="sth" editFunction={clickEdit}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" coid="92urf924uruf0w9yf02" coname="sth" editFunction={clickEdit}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" coid="92urf924uruf0w9yf02" coname="sth" editFunction={clickEdit}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" coid="92urf924uruf0w9yf02" coname="sth" editFunction={clickEdit}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" coid="92urf924uruf0w9yf02" coname="sth" editFunction={clickEdit}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" coid="92urf924uruf0w9yf02" coname="sth" editFunction={clickEdit}/>
            
            {
            isEditOpen? 
            <>
                <EditMeetingRoom id={clickId} closeOverlayWhenSubmit={() => setIsEditOpen(false)}/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsEditOpen(false)}></button>
            </>
             : ""  
            }

            <div className="fixed w-[calc(100vw-350px)] h-[90vh] right-0 bottom-0 z-[-10] bg-linear-to-tl from-[#7100FF] to-[#1A46FF]"/>

        </main>
    );
}