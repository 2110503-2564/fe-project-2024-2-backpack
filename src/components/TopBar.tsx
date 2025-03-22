import Image from "next/image";

export default function TopBar () {

    return (
        <div className="z-50 fixed top-0 left-0 flex items-center p-8 w-full h-[10vh] 
        bg-linear-to-r from-red-300 via-emerald-300 to-sky-300">
            <Image
                src="/img/logo.svg"
                alt="logo"
                objectFit="contain"
                width={150}
                height={0}
            />
            <div className= "w-full h-fit">
                <div className="text-black [text-shadow:2px_2px_0px_white,-2px_-2px_0px_white,2px_-2px_0px_white,-2px_2px_0px_white]
                text-4xl font-bold text-right">
                    Log in
                </div>
            </div>


        </div>
    );


}