import { BackendResponse } from "@/types/BackendResponses";
import { Reservation } from "@/types/Reservation";

export async function getReservations(
  token: string,
  meetingRoomId?: string
): Promise<BackendResponse<Reservation>> {
  let responseString: string = `http://localhost:5000/api/reservations`;

  if (meetingRoomId)
    responseString = `http://localhost:5000/api/meetingRooms/${meetingRoomId}/reservations`;

  const response = await fetch(responseString, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch reservations");

  return response.json();
}

export async function getReservation(
  token: string,
  id: string
): Promise<BackendResponse<Reservation>> {
  const response = await fetch(
    `http://localhost:5000/api/reservations/${id}}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) throw new Error(`Failed to fetch reservation of id: ${id}`);

  return response.json();
}

export async function createReservation(
  token: string,
  content: Reservation
): Promise<BackendResponse<Reservation>> {
  const response = await fetch(
    `http://localhost:5000/api/meetingRooms/${content.meetingRoom}/reservations`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reserveDateStart: content.reserveDateStart,
        reserveDateEnd: content.reserveDateEnd,
      }),
    }
  );

  if (!response.ok) throw new Error("Failed to create new reservation");

  return response.json();
}

export async function updateReservation(
  token: string,
  content: Reservation
): Promise<BackendResponse<Reservation>> {
  const response = await fetch(`http://localhost:5000/api/reservations/${content._id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reserveDateStart: content.reserveDateStart,
      reserveDateEnd: content.reserveDateEnd,
    }),
  });

  if (!response.ok)
    throw new Error(`Failed to update reservation of id: ${content._id}`);

  return response.json();
}

export async function deleteReservation(
  token: string,
  id: string
): Promise<BackendResponse<Reservation>> {
  const response = await fetch(`http://localhost:5000/api/reservations/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok)
    throw new Error(`Failed to delete reservation of id: ${id}`);

  return response.json();
}
