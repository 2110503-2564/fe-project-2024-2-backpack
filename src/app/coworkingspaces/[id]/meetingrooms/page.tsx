import CoworkingSpaceInfoCard from "@/components/CoworkingSpaceInfoCard";
import MeetingRoomInfoCard from "@/components/MeetingRoomInfoCard";
export default function meetingRoomsList({ params }: { params: { id: string } }) {
    return (
        <div className="h-auto min-h-[90vh] bg-gray-200 ">
            <CoworkingSpaceInfoCard id={params.id}>
            </CoworkingSpaceInfoCard>
            <div className="w-full h-auto px-12 py-6 bg-gray-200 inline-flex flex-col justify-start items-start gap-6">
                <MeetingRoomInfoCard id="1">
                </MeetingRoomInfoCard>
                <MeetingRoomInfoCard id="1">
                </MeetingRoomInfoCard>
            </div>
            <div className="h-auto">
                testt
            </div>

        </div>
    );
}