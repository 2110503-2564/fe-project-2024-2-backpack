// app/(general)/coworkingspaces/[id]/meetingrooms/MeetingRoomsPageClient.tsx
"use client";
import { useSearchParams } from "next/navigation";
import MeetingRoomsPage from "@/components/MeetingRoomPage";


export default function MeetingRoomsPageClient({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const coworkingSpaceId = id; // Use the 'id' passed from the parent page
  const date = searchParams.get("date");
  const startTime = searchParams.get("startTime");
  const endTime = searchParams.get("endTime");

  const reserveDateStart = date && startTime ? new Date(`${date}T${startTime}:00.000Z`) : undefined;
  const reserveDateEnd = date && endTime ? new Date(`${date}T${endTime}:00.000Z`) : undefined;

  return (
    <MeetingRoomsPage
      coworkingSpaceId={coworkingSpaceId}
      reserveDateStart={reserveDateStart}
      reserveDateEnd={reserveDateEnd}
    />
  );
}
