import Image from "next/image";

export default function FinalMainPageCard() {
  return (
    <div className="w-full bg-[#7E0000] rounded-3xl grid grid-row-2 px-4 pb-8 mt-8 gap-8 justify-center">
      <div className="order-1 row-span-1">
        <Image src="/img/jojo3.png" alt="Card image" width={2000} height={0} />
      </div>
      <div className="order-2 row-span-1 text-3xl font-bold text-center text-white">
        <h2>DORA COMMANDS YOU TO START SEARCHING AND BOOK NOW!!!!!</h2>
        <h2> WE NEED TO DEFEAT DIO !!</h2>
      </div>
    </div>
  );
}
