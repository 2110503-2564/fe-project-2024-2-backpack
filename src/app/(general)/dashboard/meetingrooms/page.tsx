"use client"
import AdminObjectCard from "@/components/AdminObjectCard"
import { useState, useEffect } from "react"
import { EditMeetingRoom, EditProfile } from "@/components/EditOverlay";
import DoraNextPrev from "@/components/DoraPrevNext";
import { getMeetingRooms } from "@/libs/meetingRoom";
import { MeetingRoom } from "@/types/MeetingRoom";
import { getCoWorkingSpace } from "@/libs/coworkingSpace";

export default function DashboardMeetingrooms () {

    // edit meeting room
    const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
    const [clickId, setClickId] = useState<string>("");
    const clickEdit = (itid:string) => {
        setIsEditOpen(!isEditOpen);
        setClickId(itid);
    }

    // new meeting room
    // const [isNewOpen, setIsNewOpen] = useState<boolean>(false);

    // to disable scrolling
    useEffect(() => {
        if (isEditOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isEditOpen]);

    const removeFunction = () => {
        // call DELETE api to remove this id from database
    }

    // to fetch data from backend 🗿
    const [meetingRooms, setMeetingRooms] = useState<MeetingRoom[]>([]);
    
    const fetchData = async () => {
        const meetingrooms = await getMeetingRooms();
        
        if (meetingrooms.success === false) {
            alert(meetingrooms.message);
            return;
        } else if ("data" in meetingrooms) {
            const meetingroomPromises = meetingrooms.data.map(async (item:MeetingRoom) => {
                if (!item) {
                    alert("all item should be defined !")
                    return undefined;
                }
                const co = await getCoWorkingSpace(item.coworkingSpace);

                if (co.success === false) {
                    alert(co.message);
                    return;
                } else if ("data" in co) {
                    return {
                        _id: item._id || "",
                        roomNumber: item.roomNumber || -1,
                        coworkingSpace: item.coworkingSpace || -1,
                        location: co.data[0].name || "", 
                        capacity: item.capacity || -1,
                        projector: item.projector || false,
                        whiteboard: item.whiteboard || false,
                        ledTV: item.ledTV || false,
                        speaker: item.speaker || false,
                        __v: item.__v || -1,
                    }
                }
            });

        // wait for all promise
        const finalMeetingRooms = (await Promise.all(meetingroomPromises)).filter(
            (room) => room !== undefined
        ) as MeetingRoom[];
        setMeetingRooms(finalMeetingRooms);
        }
    }

    // use effect to deal with async
    useEffect(() => { fetchData() },[]);

    return (
        <main className="pb-50 pt-3">
            {/* <div className="w-(calc[100vw-35opx]) flex justify-center">
                <YellowButton text="New" clickto={() => setIsNewOpen(!isNewOpen)}/>
            </div> */}
            
            <DoraNextPrev/>
            
            {
                meetingRooms.map((item) => (
                    <AdminObjectCard
                    id = {item._id}
                    number = {item.roomNumber}
                    coid = {item.coworkingSpace}
                    coname= {item.location}
                    editFunction={clickEdit}/>
                ))
            }
            
            {
            isEditOpen? 
            <>
                <EditMeetingRoom id={clickId} closeOverlayWhenSubmit={() => setIsEditOpen(false)}/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsEditOpen(false)}></button>
            </>
             : ""  
            }

            {/* {
            isNewOpen? 
            <>
                <EditMeetingRoom id="{New Meeting room}" closeOverlayWhenSubmit={() => setIsNewOpen(false)} type="new"/>
                <button className="fixed inset-0 bg-black z-70 opacity-40"
                onClick={() => setIsNewOpen(false)}></button>
            </>
             : ""  
            } */}

            <div className="fixed w-[calc(100vw-350px)] h-[90vh] right-0 bottom-0 z-[-10] bg-linear-to-tl from-[#7100FF] to-[#1A46FF]"/>

        </main>
    );
}