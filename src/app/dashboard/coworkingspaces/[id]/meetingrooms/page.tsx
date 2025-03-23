import CoworkingSpaceInfoCard from "@/components/CoworkingSpaceInfoCard";
import MeetingRoomInfoCard from "@/components/MeetingRoomInfoCard";
import { YellowButton } from "@/components/YellowButton";

export default function DashboardCoworkingspaceMeetingrooms ({ params }: { params: { vid: string } }) {

    return (
        <main>
            <div className="h-auto min-h-[90vh] bg-gray-200 ">
                <CoworkingSpaceInfoCard id={params.vid}/>

                <div className="w-full h-auto px-12 py-6 bg-gray-200 inline-flex flex-col justify-start items-start gap-6">
                    <MeetingRoomInfoCard id="1"/>
                    <MeetingRoomInfoCard id="1"/>
                </div>
                <div className="h-auto">
                    testt
                </div>
            
            </div>
        </main>       
    );

}