import CoworkingSpaceInfo from "@/components/CoworkingSpaceInfo";
import MeetingRoomInfoCard from "@/components/MeetingRoomInfoCard";
import { getCoWorkingSpace } from "@/libs/coworkingSpace"
import { CoworkingSpace } from "@/types/CoworkingSpace"
export default async function meetingRoomsList({ params }: { params: { id: string } }) {
    const { id } = await params;
    const res = await getCoWorkingSpace(id);
    console.log(params.id);
    var coworkingSpace;
    let cws: CoworkingSpace[] = [];
    if (res.success && "data" in res) {
        coworkingSpace = res.data;
        if (!Array.isArray(coworkingSpace)) {
            //Data is not an array. Converting to array.
            cws = [coworkingSpace];
        }
    }
    else return ("no data");
    console.log()
    return (
        <div className="h-auto min-h-[90vh] bg-gray-200 ">
            {cws ? (cws.map((cw) => (
                <CoworkingSpaceInfo
                    about={cw.about}
                    id={cw._id}
                    name={cw.name}
                    location={cw.address + ", " + cw.district + ", " + cw.province + ", " + cw.postalcode}
                    openinghours={
                        new Date(cw.open_time).toISOString().slice(11, 16) + "-" +
                        new Date(cw.close_time).toISOString().slice(11, 16)
                    }
                    telephone={cw.tel}
                />
            ))) : (
                <p>No coworking space with id {params.id}.</p>
            )}
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