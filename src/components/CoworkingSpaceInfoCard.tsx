"use client"
import { getUserRole } from "@/libs/getUserRole";
import { useState, useEffect } from "react";
import Image from "next/image";
import { YellowButton } from "./YellowButton";
import { EditCoworkingSpace } from "./EditOverlay";
export default function CoworkingSpaceInfoCard({ id }
    : { id: string }) {

        // const session = await getServerSession(authOptions);
        const [role, setRole] = useState<string | null>(null);

        useEffect(() => {
            setRole(getUserRole());
        })        

        const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

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

    return (
        <div className="relative   bg-white w-full h-auto px-12  lg:inline-flex justify-start items-center gap-7 overflow-hidden py-12">

            {
                role === "admin" ? 
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
                    Menacing Space
                </div>
                <div className="self-stretch min-h-7 h-auto justify-start text-neutral-600 text-base font-normal  leading-relaxed">
                    123 Sukhumvit Road, Khlong Toei, Bangkok, Thailand
                </div>
                <div className="self-stretch h-auto justify-start text-black text-base font-normal  leading-relaxed">
                    Very menacing coworking space. You might encounter stand users here...  Located in the heart of the city, we provide a vibrant environment that fosters productivity, creativity, and collaboration.
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-base font-normal  leading-relaxed">
                    Telephone: +66 2 123 4567
                </div>
                <div className="self-stretch justify-start text-neutral-600 text-base font-normal  leading-relaxed">
                    Open-Close time: 9.00-21.00
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

