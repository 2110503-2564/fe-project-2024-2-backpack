"use client"
import AdminObjectCard from "@/components/AdminObjectCard"
import { useState } from "react"
import { EditMeetingRoom, EditProfile } from "@/components/EditOverlay";

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
        <main>
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

        </main>
    );
}