"use client"
import React, { useRef } from "react";

export function YellowButton ({refButton, text, clickto}:{refButton?:React.RefObject<HTMLButtonElement>, text:string, clickto?:Function}) {
    return (
        <button 
        className="bg-linear-to-t from-yellow-300 to-yellow-100 border-4 border-yellow-600 rounded-xl 
            font-(family-name:--font-mono) italic font-bold text-2xl
            w-[130px] h-[50px] transition-all duration-100
            hover:from-blue-500 hover:to-blue-200 hover:border-blue-600" 
        style={{boxShadow:"inset 1px 4px 1.2px rgba(255, 255, 255, 1)"}}
        onMouseEnter={(e) => {e.currentTarget.style.boxShadow = "inset 1px 4px 1.2px rgba(255, 255, 255, 1), 3px 3px 7px rgba(0, 0, 0, 0.8)"}}
        onMouseLeave={(e) => {e.currentTarget.style.boxShadow = "inset 1px 4px 1.2px rgba(255, 255, 255, 1)"}}
        >
            {text}
        </button>
    );
}

export function RainbowSelectButton ({text, goto}:{text:string, goto?:string}) {
    return (
        <button style={{ backgroundImage: "var(--color-rainbow)",
            boxShadow: "inset 1px 4px 3px rgba(255, 255, 255, 0.7),inset -3px -3px 7px rgba(0, 0, 0, 0.9)"
         }}
        className="w-[280px] h-[75px] text-xl italic font-bold text-white [-webkit-text-stroke:1px_black]"
        >
            {text}
        </button>
    );
}

export function SubmitButton ({clickto}:{clickto?:Function}) {
    return (
        <button className="font-bold text-3xl rounded-4xl bg-red-500 w-40 h-10 text-white [-webkit-text-stroke:1.5px_black]"
        style={{boxShadow: "1px 4px 0px rgba(90, 0, 0, 1)"}}
        onClick={(e) => {clickto? clickto() : "";}}>
            Submit
        </button>
    );
}