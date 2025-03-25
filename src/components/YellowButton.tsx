"use client";
import React, { useRef } from "react";

export function YellowButton({
  refButton,
  text,
  clickto,
}: {
  refButton?: React.RefObject<HTMLButtonElement>;
  text: string;
  clickto?: Function;
}) {
  return (
    <button
      className="bg-linear-to-t from-yellow-300 to-yellow-100 border-4 border-yellow-600 rounded-xl 
            font-(family-name:--font-mono) italic font-bold text-2xl
            w-[130px] h-[50px] transition-all duration-100
            hover:from-blue-500 hover:to-blue-200 hover:border-blue-600"
      style={{ boxShadow: "inset 1px 4px 1.2px rgba(255, 255, 255, 1)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "inset 1px 4px 1.2px rgba(255, 255, 255, 1), 3px 3px 7px rgba(0, 0, 0, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "inset 1px 4px 1.2px rgba(255, 255, 255, 1)";
      }}
      onClick={() => {
        clickto?.();
      }}
    >
      {text}
    </button>
  );
}
