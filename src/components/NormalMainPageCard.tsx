import Image from "next/image";

export default function NormalMainPageCard({
  imgSrc,
  imgPosition,
  text,
}: {
  imgSrc: string;
  imgPosition: "left" | "right";
  text: string;
}) {
  return (
    <div className="w-full bg-white rounded-3xl grid grid-cols-2 p-8 mt-8 gap-8">
      <div
        className={
          imgPosition === "left" ? "order-1 col-span-1" : "order-2 col-span-1"
        }
      >
        <Image src={imgSrc} alt="Card image" width={800} height={0} />
      </div>
      <h2
        className={
          imgPosition === "left"
            ? "order-2 col-span-1 text-3xl font-bold self-center"
            : "order-1 col-span-1 text-3xl font-bold self-center"
        }
      >
        {text}
      </h2>
    </div>
  );
}
