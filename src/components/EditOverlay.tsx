import { ReactNode } from "react";
import { SubmitButton } from "./OtherComponents";
import { ClassNames } from "@emotion/react";

export function EditBg ({children, text}:{children:ReactNode, text:string}) {

    return (
        <div className="h-[70px] w-auto rounded-xl py-3 px-5 grid grid-cols-4 place-content-center"
        style={{ backgroundImage: "var(--color-editgradient)"}}
        >
            <div className="text-xl font-bold text-center text-balance">
                {text}
            </div>
            <div className= "col-span-3 text-lg text-wrap px-1 h-fit self-center">
                {children}
            </div>         
        </div>
        
    );

}

export function EditProfile ({id, closeOverlayWhenSubmit}:{id:string, closeOverlayWhenSubmit:Function}) {



    return (
        <div className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
        style={{boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)"}}>
            <div className="relative w-full h-[75vh] p-5">
                <div className="flex flex-col space-y-4 mb-[60px]">
                    <EditBg text="User ID">
                        <h2 className="">{id}</h2>
                    </EditBg>
                    <EditBg text="Name">
                        <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                    <EditBg text="Email">
                        <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                    <EditBg text="Password">
                        <input type="password" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                </div>
                
                <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
                    <SubmitButton clickto={() => {closeOverlayWhenSubmit();}}/>
                </div>               
            </div>        
        </div>  
    );
}

export function EditReservation ({id, closeOverlayWhenSubmit}:{id:string, closeOverlayWhenSubmit:Function}) {

    return (
        <div className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
        style={{boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)"}}>
            <div className="relative w-full h-[75vh] p-5">
                <div className="flex flex-col space-y-4 mb-[60px]">
                    <EditBg text="User ID">
                        <h2 className="">{id}</h2>
                    </EditBg>
                    <EditBg text="Co-working space">
                        <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                    <EditBg text="Meeting room">
                        <input type="number" min="1" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                    <div className="grid grid-cols-2 w-full gap-x-3 gap-y-4">
                        <EditBg text="From">
                            <input type="time" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="To">
                            <input type="time" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                    </div>
                    
                </div>
                
                <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
                    <SubmitButton clickto={() => {closeOverlayWhenSubmit();}}/>
                </div>               
            </div>        
        </div>  
    );

}

export function EditMeetingRoom ({id, closeOverlayWhenSubmit}:{id:string, closeOverlayWhenSubmit:Function}) {

    return (
        <div className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
        style={{boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)"}}>
            <div className="relative w-full h-[75vh] p-5">
                <div className="flex flex-col space-y-4 mb-[60px]">
                    <EditBg text="Meeting room ID">
                        <h2 className="">{id}</h2>
                    </EditBg>
                    <EditBg text="Location">
                        <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                    <div className="grid grid-cols-3 w-full gap-x-3 gap-y-4">
                        <EditBg text="Room Number">
                            <input type="number" min="1" className="w-9/10 focus:ring-2 focus:ring-white outline-none rounded-md px-2 ml-5"/>
                        </EditBg>
                        <EditBg text="Projector">
                            <input type="checkbox" className="w-full outline-none rounded-md px-2 h-[20px]"/>
                        </EditBg>
                        <EditBg text="LedTV">
                            <input type="checkbox" className="w-full outline-none rounded-md px-2 h-[20px]"/>
                        </EditBg>
                        <EditBg text="Capacity">
                            <input type="number" min="1" className="w-9/10 focus:ring-2 focus:ring-white outline-none rounded-md px-2 ml-5"/>
                        </EditBg>
                        <EditBg text="Whiteboard">
                            <input type="checkbox" className="w-full outline-none rounded-md px-2 h-[20px]"/>
                        </EditBg>
                        <EditBg text="Speaker">
                            <input type="checkbox" className="w-full outline-none rounded-md px-2 h-[20px]"/>
                        </EditBg>
                    </div>
                    
                </div>
                
                <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
                    <SubmitButton clickto={() => {closeOverlayWhenSubmit();}}/>
                </div>               
            </div>        
        </div>  
    );

}

export function EditCoworkingSpace ({id, closeOverlayWhenSubmit}:{id:string, closeOverlayWhenSubmit:Function}) {

    // set submit button to call POST api when clicked
    const clickSubmit = () => {
        // pass info to api
        // .. useState ??
    }

    return (
        <div className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] max-h-[100vh]
        border-4 border-black rounded-2xl"
        style={{boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)"}}>
            <div className="relative w-full min-h-[75vh] p-5">
                <div className="flex flex-col space-y-4 mb-[60px]">
                    <EditBg text="User ID">
                        <h2>{id}</h2>
                    </EditBg>
                    <EditBg text="Co-working space">
                        <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                    </EditBg>
                    <div className="grid grid-cols-2 w-full gap-x-3 gap-y-4">
                        <EditBg text="Address">
                            <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Distinct">
                            <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Province">
                            <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Postal code">
                            <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Telephone">
                            <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Region">
                            <input type="text" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Open">
                            <input type="time" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                        <EditBg text="Close">
                            <input type="time" className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"/>
                        </EditBg>
                    </div>
                    
                </div>
                
                <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
                    <SubmitButton clickto={() => {closeOverlayWhenSubmit();}}/>
                </div>               
            </div>        
        </div>  
    );

}

