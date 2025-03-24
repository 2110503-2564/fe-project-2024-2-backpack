import Image from "next/image";
import { useState, useEffect, useRef} from "react";
import { createPopper, Instance } from "@popperjs/core";
import { RainbowSelectButton } from "./OtherComponents";
import { usePathname } from "next/navigation";

export default function AdminTopBar() {

    const [isOpen, setIsOpen] = useState(false);
    const setPopup = () => (setIsOpen(!isOpen));
    const buttonRef = useRef(null);
    const popupRef = useRef(null);
    const popperInstance = useRef<Instance|null>(null);

    const pathname = usePathname();
    const nowPage = {
        "/dashboard/users": "Users",
        "/dashboard/coworkingspaces": "Co-working spaces",
        "/dashboard/meetingrooms": "Meeting rooms",
        "/dashboard/reservations": "Reservations"
    }[pathname] || "Select" 
    
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
                {nowPage}
              </button>
          </div>
  
          {
            isOpen && (
              <div className="absolute flex flex-col h-fit w-fit m-5" ref={popupRef}>
                <RainbowSelectButton text="Reservations" goto="reservations" setPopup={setPopup}/>
                <RainbowSelectButton text="Co-working Space" goto="coworkingspaces" setPopup={setPopup}/>
                <RainbowSelectButton text="Meeting Room" goto="meetingrooms" setPopup={setPopup}/>
              </div>
            )
          }
  
      </div>
  
    );
  }