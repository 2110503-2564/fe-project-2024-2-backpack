import { BlueButton } from "@/components/BlueButton";
import Link from "next/link";
import Image from "next/image";
export default function CoworkingSpaceCard({ id, name, location, about, openinghours }
    : { id?: string, name: string, location: string, about: string, openinghours: string }) {
        if(!id) id="1";
        return (
        <div className="w-full h-auto px-5 py-5 bg-white rounded-[31px] outline outline-2 outline-offset-[-2px] outline-zinc-400 inline-flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-black text-2xl font-bold leading-loose">
                {name}
            </div>
            <div className="w-full lg:inline-flex justify-start items-center gap-2.5">
                <div className="min-w-full lg:min-w-3/5 min-h-72 h-auto lg:h-full relative rounded-[20px] overflow-hidden">
                    <Image src={"/img/coworkingSpace/" + 1 + ".png"}
                        alt="coworking space"
                        quality={100}
                        className="bg-black w-full h-full object-cover"
                        fill={true}
                    >
                    </Image>
                </div>
                <div className="min-w-full lg:min-w-2/5 h-auto p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="h-1/4 self-stretch justify-start text-neutral-600 text-base font-normal   leading-tight">
                        {location}
                    </div>
                    <div className="h-1/2 self-stretch justify-start text-black text-base font-normal   leading-tight">
                        {about}
                    </div>
                    <div className="h-1/4 self-stretch justify-start text-neutral-600 text-base font-normal   leading-tight">
                        Open-Close time: {openinghours}
                    </div>
                    <div className="h-auto w-full">
                        <Link href="/coworkingspaces/1/meetingrooms">
                            <BlueButton text="view meeting rooms">
                            </BlueButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

