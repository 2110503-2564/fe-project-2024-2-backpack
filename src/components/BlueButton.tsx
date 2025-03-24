"use client"
// will come to change laterrrrrrr
export function BlueButton ({text, clickto}:{text:string, clickto?:Function}) {
    return (
        <button 
        className="cursor-pointer w-full min-h-9 h-auto relative bg-gradient-to-b from-blue-100 to-blue-600 rounded-lg shadow-[inset_7px_6px_4px_0px_rgba(216,249,255,0.89)] outline outline-[3px] outline-blue-700 overflow-hidden" 
        style={{boxShadow:"inset 1px 4px 1.2px rgba(255, 255, 255, 1)"}}
        onMouseEnter={(e) => {e.currentTarget.style.boxShadow = "inset 1px 4px 1.2px rgba(255, 255, 255, 1), 3px 3px 7px rgba(0, 0, 0, 0.8)"}}
        onMouseLeave={(e) => {e.currentTarget.style.boxShadow = "inset 1px 4px 1.2px rgba(255, 255, 255, 1)"}}
        onClick={() => {clickto?.()}}
        >
            {text}
        </button>
    );
}