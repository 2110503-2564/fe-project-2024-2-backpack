"use client";
import { useSearchParams } from "next/navigation";
import meetingRoomsPage from "@/components/MeetingRoomPage";
export default function meetingRoomsPageClient({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const coworkingSpaceId = params.id;
  const date = searchParams.get("date");
  const startTime = searchParams.get("startTime");
  const endTime = searchParams.get("endTime");
  
  const reserveDateStart = date && startTime ? new Date(`${date}T${startTime}:00.000Z`) : undefined;
  const reserveDateEnd = date && endTime ? new Date(`${date}T${endTime}:00.000Z`) : undefined;
  
  // Pass params and search params to the meetingRoomsPage
  return meetingRoomsPage({
    coworkingSpaceId,
    reserveDateStart,
    reserveDateEnd,
  });
}
