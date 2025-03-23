export default function myBookingList() {
    return (
        <div className="self-stretch h-80 px-12 inline-flex justify-start items-center gap-7 overflow-hidden">
            <img className="w-[540px] h-80 relative rounded-[20px]" src="https://placehold.co/540x304" />
            <div className="w-[754px] h-64 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="self-stretch justify-start text-black text-2xl font-bold font-['Comic_Sans_MS'] leading-loose">Menacing Space</div>
                <div className="self-stretch h-7 justify-start text-neutral-600 text-xl font-normal font-['Comic_Sans_MS'] leading-relaxed">123 Sukhumvit Road, Khlong Toei, Bangkok, Thailand</div>
                <div className="self-stretch h-20 justify-start text-black text-xl font-normal font-['Comic_Sans_MS'] leading-relaxed">Very menacing coworking space. You might encounter stand users here...  Located in the heart of the city, we provide a vibrant environment that fosters productivity, creativity, and collaboration.</div>
                <div className="self-stretch justify-start text-neutral-600 text-xl font-normal font-['Comic_Sans_MS'] leading-relaxed">Telephone: +66 2 123 4567</div>
                <div className="self-stretch justify-start text-neutral-600 text-xl font-normal font-['Comic_Sans_MS'] leading-relaxed">Open-Close time: 9.00-21.00</div>
            </div>
        </div>
    );
}