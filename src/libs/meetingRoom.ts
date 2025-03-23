import { MeetingRoom } from "@/types/MeetingRoom";

export async function getMeetingRooms(
  page?: string,
  coworkingSpaceId?: string
) {
  let responseString: string = `http://localhost:5000/api/meetingRooms`;

  if (coworkingSpaceId)
    responseString = `http://localhost:5000/api/coworkingSpace/${coworkingSpaceId}/meetingRooms`;
  if (page) responseString += `?page=${page}`;

  const response = await fetch(responseString, {
    method: "GET",
  });

  if (!response.ok)
    throw new Error(`Failed to fetch meeting rooms of page: ${page}`);

  return response.json();
}

export async function getMeetingRoom(id: string) {
  const response = await fetch(
    `http://localhost:5000/api/meetingRooms/${id}}`,
    {
      method: "GET",
    }
  );

  if (!response.ok)
    throw new Error(`Failed to fetch meeting rooms of id: ${id}`);

  return response.json();
}

export async function createMeetingRoom(token: string, content: MeetingRoom) {
  const response = await fetch(`http://localhost:5000/api/meetingRooms`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) throw new Error("Failed to create new meeting room");

  return response.json();
}

export async function updateMeetingRoom(
  token: string,
  id: string,
  content: MeetingRoom
) {
  const response = await fetch(`http://localhost:5000/api/meetingRooms/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (!response.ok)
    throw new Error(`Failed to update meeting room of id: ${id}`);

  return response.json();
}

export async function deleteMeetingRoom(token: string, id: string) {
  const response = await fetch(`http://localhost:5000/api/meetingRooms/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok)
    throw new Error(`Failed to update co-working space of id: ${id}`);

  return response.json();
}
