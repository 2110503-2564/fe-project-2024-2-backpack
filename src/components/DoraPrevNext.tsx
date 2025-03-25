import Image from "next/image";

export default function DoraNextPrev() {
  return (
    <div className="fixed bottom-0 right-0 w-[calc(100vw-350px)] h-fit">
      <div className="relative w-full h-[200px] flex flex-row">
        <Image
          src="/img/prev.png"
          alt="prev"
          objectFit="contain"
          width={150}
          height={150}
          className="absolute left-0 mt-2"
        />

        <Image
          src="/img/next.png"
          alt="prev"
          objectFit="contain"
          width={150}
          height={150}
          className="absolute right-0"
        />
      </div>
    </div>
  );
}

// เดวเอา link ครอบ ใช้เปลี่ยน page
