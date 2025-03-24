"use client"
import clsx from "clsx";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { YellowButton } from "./YellowButton";
import { EditCoworkingSpace } from "./EditOverlay";
export default function CoworkingSpaceCard({ id, name, location, about, telephone, openinghours }
    : { id?: string, name: string, location: string, about: string, telephone:string, openinghours: string }) {    

        const pathname = usePathname();

        const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

        // to disable scrolling
        useEffect(() => {
            if (isEditOpen) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "auto"
            }
        }, [isEditOpen]);

        const removeFunction = () => {
            // call DELETE api to remove this id from database
        }

        const bgColor:string = pathname.includes("/dashboard") ? "bg-linear-to-tl from-[#06F157] to-[#01C3FF]" : "bg-white"

    return (
        <div className={clsx("relative w-full h-auto px-12  lg:inline-flex justify-start items-center gap-7 overflow-hidden py-12", bgColor)}>

            {
                pathname.search("/dashboard") !== -1 ?
                (
                    <div className="absolute right-12 top-12 z-50">
                        <YellowButton text="edit" clickto={() => (setIsEditOpen(!isEditOpen))}/>
                    </div>
                )
                : ""
            }

            <div className="min-w-full lg:min-w-3/5 xl:min-w-2/5 min-h-72 h-auto lg:h-full relative rounded-[20px] overflow-hidden">
                <Image src={"/img/coworkingspace/" + id + ".png"}
                    alt="coworking space"
                    quality={100}
                    className="bg-black w-full h-full object-cover"
                    fill={true}
                >
                </Image>
            </div>
            <div className="min-w-full lg:min-w-2/5 xl:min-w-3/5 h-auto p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="self-stretch justify-start text-black text-2xl font-bold  leading-loose">
                    {name}
                </div>
                <div className="self-stretch min-h-7 h-auto justify-start text-neutral-600 text-base font-normal  leading-relaxed">
                    {location}
                </div>
                <div className="self-stretch h-auto justify-start text-black text-base font-normal  leading-relaxed">
                    {about}
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-base font-normal  leading-relaxed">
                    Telephone: {telephone}
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-base font-normal  leading-relaxed">
                    Open-Close time: {openinghours}
                </div>
            </div>

            {
            isEditOpen? 
            <>
                <EditCoworkingSpace id={id} closeOverlayWhenSubmit={() => setIsEditOpen(false)}/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsEditOpen(false)}></button>
            </>
                : ""  
            }

        </div>
    );
}

