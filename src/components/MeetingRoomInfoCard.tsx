"use client"
import { getUserRole } from "@/libs/getUserRole";
import { useState, useEffect } from "react";
import Image from "next/image";
import { YellowButton } from "./YellowButton";
import { EditMeetingRoom } from "./EditOverlay";
import { usePathname } from "next/navigation";
export default function MeetingRoomInfoCard({ id }
    : { id: string }) { 

    const pathname = usePathname();
    
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

    const removeFunction = () => {
        // call DELETE api to remove this id from database
    }

    useEffect(() => {
        if (isEditOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isEditOpen]);

    return (
        <div className="w-full min-h-65 h-auto pl-14 pr-14 py-7 bg-white rounded-[30px] flex flex-row justify-start items-center flex-wrap content-start gap-2.5 overflow-hidden">
            <div className="min-w-full lg:min-w-2/5 min-h-60 h-auto lg:h-full relative rounded-[20px] overflow-hidden">
                <Image src={"/img/meetingRoom/" + id + ".png"}
                    alt="coworking space"
                    quality={100}
                    className="bg-black w-full h-full object-cover"
                    fill={true}
                >
                </Image>
            </div>
            <div className="min-w-full lg:min-w-3/7 h-auto lg:h-full pl-3.5 pr-2.5 pt-6 pb-2.5 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
                <div className="w-full h-24 justify-start text-black text-base font-bold    leading-relaxed">
                    Meeting room 1<br /> Location: 1st Floor Zone A<br />Capacity: 10<br />Facilities:<br /></div>
                <div className="w-full p-2.5 inl ine-flex justify- center items-cen ter gap-2.5 flex-wrap flex-col content-center overflow-hidden">
                    <div className="justify-start text-black text-base font-bold    leading-relaxed">Projector: ✘</div>
                    <div className="justify-start text-black text-base font-bold    leading-relaxed">White Board: ✔</div>
                    <div className="justify-start text-black text-base font-bold    leading-relaxed">LED TV: ✔</div>
                    <div className="justify-start text-black text-base font-bold    leading-relaxed">Speaker: ✔</div>
                </div>
            </div>
            <div className="min-w-full lg:min-w-1/10 h-auto lg:h-full flex flex-col items-center justify-center flex-grow">

            {
                pathname.search("/dashboard") !== -1 ?
                (
                    <>
                    <div className="flex-col flex space-y-4 mb-3">
                        <YellowButton text="edit" clickto={() => setIsEditOpen(!isEditOpen)}/>
                        <YellowButton text="remove"/>  
                    </div>              
                    </>
                )
                : ""
            }

                <div className="cursor-pointer justify-start text-green-600 text-lg font-bold leading-relaxed">Reserve</div>
                <Image
                src="/img/bookingSymbol.svg"
                alt="booking"
                width="60"
                height="60"
                className="cursor-pointer h-auto"
                />          
                
            </div>

            {
            isEditOpen? 
            <>
                <EditMeetingRoom id={id} closeOverlayWhenSubmit={() => setIsEditOpen(false)}/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsEditOpen(false)}></button>
            </>
                : ""  
            }


        </div>
    );

} 