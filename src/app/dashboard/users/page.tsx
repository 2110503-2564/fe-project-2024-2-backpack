"use client"
import AdminObjectCard from "@/components/AdminObjectCard"
import { useState, useEffect } from "react"
import { EditProfile } from "@/components/EditOverlay";
import { YellowButton } from "@/components/YellowButton";
import DoraNextPrev from "@/components/DoraPrevNext";
import { useRouter } from "next/navigation";

export default function DashboardUsers () {

    const router = useRouter();

    // for New button
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    
    // to disable scrolling
    useEffect(() => {
    if (isEditOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
    }, [isEditOpen]);

    const clickNavi = (itid:string) => {
        router.push(`/dashboard/users/${itid}/bookings`)
    }

    const removeFunction = () => {
        // call DELETE api to remove this id from database
    }

    return (
        <main className="pb-50 pt-3">
            <div className="w-(calc[100vw-35opx]) flex justify-center">
                <YellowButton text="New" clickto={() => setIsEditOpen(!isEditOpen)}/>
            </div>

            <DoraNextPrev/>
            
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Kwang" email="nk@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="vfwoihvwnvbearomga-oewj-ga-g" name="Nong Brain" email="nb@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="fw9n3u9-rs-d9f9we9fvnawne-vg" name="Nong Noon" email="nn@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Kwang" email="nk@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Brain" email="nb@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Noon" email="nn@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Kwang" email="nk@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Brain" email="nb@gmail.com" editFunction={clickNavi}/>
            <AdminObjectCard id="85ug9ep-39gpegsehg0ert0wtaw9t3f" name="Nong Noon" email="nn@gmail.com" editFunction={clickNavi}/>

            {
            isEditOpen? 
            <>
                <EditProfile id="{New User}" closeOverlayWhenSubmit={() => setIsEditOpen(!isEditOpen)} type="new"/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsEditOpen(false)}></button>
            </>
             : ""  
            }

            <div className="fixed w-[calc(100vw-350px)] h-[90vh] right-0 bottom-0 z-[-10] bg-linear-to-tl from-[#FF8800] to-[#FF0000]"/>

        </main>
    );
}