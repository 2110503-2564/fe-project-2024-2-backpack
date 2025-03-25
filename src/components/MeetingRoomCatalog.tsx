import MeetingRoomInfoCard from "./MeetingRoomInfoCard";
import { MeetingRoom } from "@/types/MeetingRoom";
const MeetingRoomCatalog = ({
  meetingRooms,
  reloadList,
}: {
  meetingRooms?: MeetingRoom[];
  reloadList: Function;
}) => {
  return (
    <div className="w-full h-auto px-12 py-6 bg-gray-200 inline-flex flex-col justify-start items-start gap-6">
      {meetingRooms && meetingRooms.length > 0 ? (
        meetingRooms.map((mr) => (
          <MeetingRoomInfoCard
            id={mr._id}
            capacity={mr.capacity}
            ledTV={mr.ledTV}
            location={mr.location}
            projector={mr.projector}
            roomNumber={mr.roomNumber}
            speaker={mr.speaker}
            whiteBoard={mr.whiteBoard}
            reloadList={reloadList}
          />
        ))
      ) : (
        <div className="w-full h-auto flex justify-center">
          No meeting room is available at the date and time you provided.
        </div>
      )}
    </div>
  );
};

export default MeetingRoomCatalog;
