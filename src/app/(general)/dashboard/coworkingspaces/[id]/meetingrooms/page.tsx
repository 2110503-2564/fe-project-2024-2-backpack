import MeetingRoomsPageClient from "./MeetingRoomsPageClient";

type tParams = Promise<{ id: string }>;

export default async function MeetingRoomsPage(props: { params: tParams }) {
  const id: string = (await props.params).id; // Await the params object
  const coworkingSpaceId = id;
  return (
    <div>
      <MeetingRoomsPageClient id={coworkingSpaceId} />
    </div>
  );
}
