import { useState, useEffect } from "react";
import { getCoWorkingSpace } from "@/libs/coworkingSpace";
import { getMeetingRooms } from "@/libs/meetingRoom";
import CoworkingSpaceInfo from "@/components/CoworkingSpaceInfo";
import MeetingRoomCatalog from "./MeetingRoomCatalog";
import { CoworkingSpace } from "@/types/CoworkingSpace"
import { MeetingRoom } from "@/types/MeetingRoom"
export default function MeetingRoomsPage({
    coworkingSpaceId,
    reserveDateStart,
    reserveDateEnd,
}: {
    coworkingSpaceId: string;
    reserveDateStart?: Date;
    reserveDateEnd?: Date;
}) {
    const [coworkingSpace, setCoworkingSpace] = useState<CoworkingSpace | undefined>(undefined);
    const [meetingRooms, setMeetingRooms] = useState<MeetingRoom[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCoworkingSpace = async () => {
            setIsLoading(true);
            const resCw = await getCoWorkingSpace(coworkingSpaceId);
            const resMr = await getMeetingRooms(undefined, coworkingSpaceId, reserveDateStart, reserveDateEnd);
            if (resCw.success && "data" in resCw) {
                setCoworkingSpace(resCw.data);
            } else {
                setCoworkingSpace(undefined);
            }
            if(resMr.success && "data" in resMr){
                setMeetingRooms(resMr.data)
            }
            else {
                setMeetingRooms(undefined);
            }
            setIsLoading(false);
        };

        fetchCoworkingSpace();
    }, [coworkingSpaceId]); // Dependency array ensures it's only called when changed

    if (isLoading) return <p>Loading...</p>;
    if (!coworkingSpace) return <p>No coworking space with id {coworkingSpaceId}.</p>;

    return (
        <div className="h-auto min-h-[90vh] bg-gray-200">
            <CoworkingSpaceInfo
                about={coworkingSpace.about}
                id={coworkingSpace._id}
                name={coworkingSpace.name}
                location={`${coworkingSpace.address}, ${coworkingSpace.district}, ${coworkingSpace.province}, ${coworkingSpace.postalcode}`}
                openinghours={`${new Date(coworkingSpace.open_time).toISOString().slice(11, 16)}-${new Date(coworkingSpace.close_time).toISOString().slice(11, 16)}`}
                telephone={coworkingSpace.tel}
            />
            <MeetingRoomCatalog meetingRooms={meetingRooms}/>
        </div>
    );
}
