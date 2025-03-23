import Image from "next/image";
export default function CoworkingSpaceCard({ id }
    : { id: string }) {
    return (
        <div className="bg-white w-full h-auto px-12  lg:inline-flex justify-start items-center gap-7 overflow-hidden py-12">
            <div className="min-w-full lg:min-w-3/5 min-h-72 h-auto lg:h-full relative rounded-[20px] overflow-hidden">

                <Image src={"/img/coworkingspace/" + id + ".png"}
                    alt="coworking space"
                    quality={100}
                    className="bg-black w-full h-full object-cover"
                    fill={true}
                >
                </Image>
            </div>
            <div className="min-w-full lg:min-w-1/2 h-auto p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
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
        </div>
    );
}

