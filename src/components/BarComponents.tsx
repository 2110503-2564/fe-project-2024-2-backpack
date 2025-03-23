"use client"
import Image from "next/image";
import { useState, useEffect, useRef} from "react";
import { createPopper, Instance } from "@popperjs/core";
import { RainbowSelectButton } from "./OtherComponents";

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
  img?: string;
  text: string;
  setValue: Function;
}) {
  return (
    <div className="flex flex-row bg-white rounded-3xl px-3 py-3 space-x-2">
      {
        img? <Image
          src={img}
          className="objectfit-auto w-5 h-5"
          alt="icon"
          width={360}
          height={360}
        /> : ""
      }
      <input
        type="time"
        placeholder={text}
        className="placeholder-gray-300 text-[10px] w-[75px]"
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

  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);
  const popperInstance = useRef<Instance|null>(null);
  
  useEffect(() => {
    if (isOpen && buttonRef.current && popupRef.current) {
      popperInstance.current = createPopper(buttonRef.current, popupRef.current,{
        placement: "bottom",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 20], // Adjust this value (10px space below the button)
            },
          },
        ],
      });
    }

    return () => {
      popperInstance.current?.destroy();
      popperInstance.current = null;
    };
  }, [isOpen]);

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
            italic font-bold text-2xl text-nowrap [-webkit-text-stroke:0.4px_white]"
            onClick={() => {setIsOpen(!isOpen)}} ref={buttonRef}>
              Co-working Space
            </button>
        </div>

        {
          isOpen && (
            <div className="absolute flex flex-col h-fit w-fit m-5" ref={popupRef}>
              <RainbowSelectButton text="Users"/>
              <RainbowSelectButton text="Co-working Space"/>
              <RainbowSelectButton text="Meeting Room"/>
            </div>
          )
        }

    </div>

  );
}
