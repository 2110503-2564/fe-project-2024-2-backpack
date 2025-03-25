"use client";
import Image from "next/image";

// Searchbar Component
export function Searchbar({
  img,
  type,
  text,
  value,          // Add value prop use to sync when clear on side bar
  setValue,
}: {
  img: string;
  type?: string;
  text: string;
  value: string;   // Define value prop
  setValue: (value: string) => void;
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
        type={type || "text"}
        placeholder={text}
        className="placeholder-gray-300 text-[10px] w-full text-left"
        value={value} // Bind value to input
        onChange={(e) => {
          e.stopPropagation();
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

// SmallSearchbar Component
export function SmallSearchbar({
  img,
  text,
  value,          // Add value prop use to sync when clear on side bar
  setValue,
}: {
  img?: string;
  text: string;
  value: string;   // Define value prop
  setValue: (value: string) => void;
}) {
  return (
    <div className="flex flex-row bg-white rounded-3xl px-3 py-3 space-x-2">
      {img && (
        <Image
          src={img}
          className="objectfit-auto w-5 h-5"
          alt="icon"
          width={360}
          height={360}
        />
      )}
      <input
        type="time"
        placeholder={text}
        className="placeholder-gray-300 text-[10px] w-[75px]"
        value={value} // Bind value to input
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
