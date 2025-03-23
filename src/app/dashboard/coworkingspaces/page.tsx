"use client"
import AdminObjectCard from "@/components/AdminObjectCard"
import { useState } from "react"
import { EditMeetingRoom, EditProfile } from "@/components/EditOverlay";
import { YellowButton } from "@/components/YellowButton";
import DoraNextPrev from "@/components/DoraPrevNext";
import { useRouter } from "next/navigation";

export default function DashboardCoworkingspaces () {

    const router = useRouter();

    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [clickId, setClickId] = useState<string>("");
    const clickEdit = (itid:string) => {
        setIsEditOpen(!isEditOpen);
        setClickId(itid);
    }

    const clickNavi = (itid:string) => {
        router.push(`/dashboard/coworkingspaces/${itid}/meetingrooms`)
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

            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" editFunction={clickNavi}/>
            <AdminObjectCard id="f9wj93fjwa-j9wjv9jfvwjmoafaw" name="solazytodona" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="solazytodona" editFunction={clickNavi}/>
            
            {
            isEditOpen? 
            <>
                <EditMeetingRoom id={clickId} closeOverlayWhenSubmit={() => setIsEditOpen(false)}/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsEditOpen(false)}></button>
            </>
             : ""  
            }

            <div className="fixed w-[calc(100vw-350px)] h-[90vh] right-0 bottom-0 z-[-10] bg-linear-to-tl from-[#06F157] to-[#01C3FF]"/>

        </main>
    );
}