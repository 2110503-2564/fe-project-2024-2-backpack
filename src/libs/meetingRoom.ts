import { MeetingRoom } from "@/types/MeetingRoom";
import { BackendResponse } from "@/types/BackendResponses";

/**
 * Fetch all Meeting rooms with the given parameters
 * @param page If given, returns data on specific page
 * @param coworkingSpaceId If given, returns Meeting rooms in specific Co-working Space
 * @param reserveDateStart If given, returns Meeting rooms in specific time period. REQUIRES reserveDateEnd
 * @param reserveDateEnd If given, returns Meeting rooms in specific time period. REQUIRES reserveDateStart
 */
export async function getMeetingRooms(
  page?: string,
  coworkingSpaceId?: string,
  reserveDateStart?: Date,
  reserveDateEnd?: Date,
): Promise<BackendResponse<MeetingRoom>> {
  let responseString: string = `http://localhost:5000/api/meetingRooms`;
  let searchParams: URLSearchParams = new URLSearchParams();

  if (coworkingSpaceId)
    responseString = `http://localhost:5000/api/coworkingSpace/${coworkingSpaceId}/meetingRooms`;
  if (page) searchParams.append("page", page);
  if (reserveDateStart && reserveDateEnd) {
    searchParams.append("reserveDateStart", reserveDateStart.toISOString());
    searchParams.append("reserveDateEnd", reserveDateEnd.toISOString());
  }
  responseString += searchParams;

  const response = await fetch(responseString, {
    method: "GET",
  });

  if (!response.ok)
    throw new Error(`Failed to fetch meeting rooms of page: ${page}`);

  return response.json();
}

/**
 * Fetch a single Meeting room by the given ID.
 * @param id Meeting room ID to retrieve
 */
export async function getMeetingRoom(
  id: string,
): Promise<BackendResponse<MeetingRoom>> {
  const response = await fetch(`http://localhost:5000/api/meetingRooms/${id}`, {
    method: "GET",
  });

  if (!response.ok)
    throw new Error(`Failed to fetch meeting rooms of id: ${id}`);

  return response.json();
}

/**
 * Create a new Meeting room if allowed.
 * @param token User token, must have the admin role
 * @param content Meeting room detail, required as type
 */
export async function createMeetingRoom(
  token: string,
  content: MeetingRoom,
): Promise<BackendResponse<MeetingRoom>> {
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

/**
 * Update a Meeting room with the given content.
 * @param token User token, must have admin role
 * @param content Meeting room detail, require as type AND _id
 */
export async function updateMeetingRoom(
  token: string,
  content: MeetingRoom,
): Promise<BackendResponse<MeetingRoom>> {
  if (!content._id) throw new Error("No ID given on MeetingRoom update");

  const response = await fetch(
    `http://localhost:5000/api/meetingRooms/${content._id}`,
    {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    },
  );

  if (!response.ok)
    throw new Error(`Failed to update meeting room of id: ${content._id}`);

  return response.json();
}

/**
 * Delete a Meeting room from the database.
 * @param token User token, must have admin role
 * @param id Meeting room ID to delete
 */
export async function deleteMeetingRoom(
  token: string,
  id: string,
): Promise<BackendResponse<MeetingRoom>> {
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
