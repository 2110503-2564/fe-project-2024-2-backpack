"use client"
import { useRouter } from "next/navigation";
import { BackendResponse } from "@/types/BackendResponses";

export function RainbowSelectButton ({text, goto, setPopup}:{text:string, goto?:string, setPopup:Function}) {

    const router = useRouter();

    return (
        <button style={{ backgroundImage: "var(--color-rainbow)",
            boxShadow: "inset 1px 4px 3px rgba(255, 255, 255, 0.7),inset -3px -3px 7px rgba(0, 0, 0, 0.9)"
         }}
        className="w-[280px] h-[75px] text-xl italic font-bold text-white [-webkit-text-stroke:1px_black]"
        onClick={(e) => { e.stopPropagation(); goto && router.push("/dashboard/" + goto); setPopup();}}
        >
            {text}
        </button>
    );
}

export function SubmitButton ({clickto, submitto}:{clickto?:Function, submitto?:Function}) {
    return (
        <button type="submit" className="font-bold text-3xl rounded-4xl bg-red-500 w-40 h-10 text-white [-webkit-text-stroke:1.5px_black]"
        style={{boxShadow: "1px 4px 0px rgba(90, 0, 0, 1)"}}
        onClick={(e) => {e.stopPropagation; clickto?.()}}
        >
            Submit
        </button>
    );
}