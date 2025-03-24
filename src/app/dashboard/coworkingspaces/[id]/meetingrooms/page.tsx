"use client"
import CoworkingSpaceInfoCard from "@/components/CoworkingSpaceInfoCard";
import MeetingRoomInfoCard from "@/components/MeetingRoomInfoCard";
import { YellowButton } from "@/components/YellowButton";
import { useState, useEffect } from "react";
import { EditMeetingRoom } from "@/components/EditOverlay";

export default function DashboardCoworkingspaceMeetingrooms ({ params }: { params: { id: string } }) {

    // new meeting room
    const [isNewOpen, setIsNewOpen] = useState<boolean>(false);
    
    // to disable scrolling
    useEffect(() => {
        if (isNewOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isNewOpen]);

    return (
        <main>
            <div className="h-auto min-h-[90vh] bg-gray-200 ">
                <CoworkingSpaceInfoCard id={params.id}/>

                <div className="w-(calc[100vw-35opx]) flex justify-center mt-6">
                    <YellowButton text="New" clickto={() => setIsNewOpen(!isNewOpen)}/>
                </div>

                <div className="w-full h-auto px-12 py-6 bg-gray-200 inline-flex flex-col justify-start items-start gap-6">
                    <MeetingRoomInfoCard id="1"/>
                    <MeetingRoomInfoCard id="1"/>
                </div>

                {
                isNewOpen? 
                <>
                    <EditMeetingRoom id="{New Meeting room}" 
                    closeOverlayWhenSubmit={() => setIsNewOpen(false)} 
                    type="new" coid={params.id}/>
                    <button className="fixed inset-0 bg-black z-70 opacity-40"
                    onClick={() => setIsNewOpen(false)}></button>
                </>
                : ""  
                }
            
            </div>
        </main>       
    );

}