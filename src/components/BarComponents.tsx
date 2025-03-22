import Image from "next/image";

export function Searchbar({
  img,
  text,
  setValue,
}: {
  img: string;
  text: string;
  setValue: Function;
}) {
  return (
    <div className="flex flex-row gap-1 bg-white rounded-3xl px-3 py-3 space-x-2">
      <Image
        src={img}
        className="objectfit-auto w-5 h-5"
        alt="icon"
        width={360}
        height={360}
      />
      <input
        type="text"
        placeholder={text}
        className="placeholder-gray-300 text-[10px] w-full text-left"
        onChange={(e) => {
          e.stopPropagation();
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export function SmallSearchbar({
  img,
  text,
  setValue,
}: {
  img: string;
  text: string;
  setValue: Function;
}) {
  return (
    <div className="flex flex-row bg-white rounded-3xl px-3 py-3 space-x-2">
      <Image
        src={img}
        className="objectfit-auto w-5 h-5"
        alt="icon"
        width={360}
        height={360}
      />
      <input
        type="text"
        placeholder={text}
        className="placeholder-gray-300 text-[10px] w-full"
        onChange={(e) => {
          e.stopPropagation();
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export function BarCheckBox({
  text,
  id,
  setValue,
}: {
  text: string;
  id: string;
  setValue: Function;
}) {
  return (
    <div className="space-x-2">
      <input
        type="checkbox"
        id={id}
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
      <label className="text-sm" htmlFor={id}>
        {text}
      </label>
    </div>
  );
}

export function AdminTopBar() {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-1/2 flex flex-row space-x-4">
        <h2
        style={{ 
            backgroundImage: "var(--color-rainbow)",
            textShadow: "1.2px 1.2px 0.5px rgba(0, 0, 0, 0.3), -1.2px -1.2px 1.3px rgba(255, 255, 255, 0.5)",
        }}
        className="text-4xl italic font-bold  bg-clip-text text-transparent [-webkit-text-stroke:1px_black]"
        >
        This is admin dashboard !!
        </h2>
        
        <div className= "relative w-fit h-fit">
            <Image
              src="/img/star.svg"
              alt=""
              width={200}
              height={200}
            />
            <button className="absolute bg-transparent top-1/2 left-1/2 transform -translate-1/2
            italic font-bold text-2xl text-nowrap [-webkit-text-stroke:0.4px_white]">
              Co-working Space
            </button>
        </div>

    </div>

  );
}
