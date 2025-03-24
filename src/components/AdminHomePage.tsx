import Image from "next/image";

export default function AdminHomePage () {
    return (
        <div className="z-1 relative h-[90vh] w-2/3">
            <Image 
                src="/img/WowYouAreRealAdmin.png"
                alt="+1000 Social Credit"
                width={500}
                height={500}
                className="absolute left-1/2 top-1/2 transform -translate-1/2"
                />
            <h2 className="absolute left-1/2 top-1/5 transform -translate-1/2 text-9xl font-bold text-nowrap">WOW</h2>
            <h2 className="absolute left-1/2 top-4/5 transform -translate-1/2 text-7xl font-bold text-nowrap">
                YOU ARE REAL ADMIN
            </h2>
        </div>
    );
}