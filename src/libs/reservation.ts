import { BackendResponse } from "@/types/BackendResponses";
import { Reservation } from "@/types/Reservation";

/**
 * Fetch all Reservations for the given user by default.
 * @param token User token, limits the Reservation visibility; Admin can view all
 * @param meetingRoomId If given, returns Reservation made in a specific Meeting room
 */
export async function getReservations(
  token: string,
  meetingRoomId?: string,
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

/**
 * Fetch a single Reservation by tie given ID.
 * @param token User token, may not succeed if the Reservation is not made by the user
 * @param id Reservation ID to retrieve
 */
export async function getReservation(
  token: string,
  id: string,
): Promise<BackendResponse<Reservation>> {
  const response = await fetch(
    `http://localhost:5000/api/reservations/${id}}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) throw new Error(`Failed to fetch reservation of id: ${id}`);

  return response.json();
}

/**
 * Create a new Reservation.
 * @param token User token, use in creation
 * @param meetingRoomId Meeting room ID of this reservation
 * @param reserveDateStart Reserve from date
 * @param reserveDateEnd Reserve to date
 */
export async function createReservation(
  token: string,
  meetingRoomId: string,
  reserveDateStart: Date,
  reserveDateEnd: Date,
): Promise<BackendResponse<Reservation>> {
  const response = await fetch(
    `http://localhost:5000/api/meetingRooms/${meetingRoomId}/reservations`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reserveDateStart: reserveDateStart,
        reserveDateEnd: reserveDateEnd,
      }),
    },
  );

  if (!response.ok) {
    // Get the backend error message
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create new reservation");
  }

  return response.json();
}

/**
 * Update a Reservation with the given content.
 * @param token User token, may not succeed if the Reservation is not made by the user
 * @param content Reservation detail, required as type AND _id
 */
export async function updateReservation(
  token: string,
  content: Reservation,
): Promise<BackendResponse<Reservation>> {
  if (!content._id) throw new Error("No ID given on Reservation update");

  const response = await fetch(
    `http://localhost:5000/api/reservations/${content._id}`,
    {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reserveDateStart: content.reserveDateStart,
        reserveDateEnd: content.reserveDateEnd,
      }),
    },
  );

  if (!response.ok)
    throw new Error(`Failed to update reservation of id: ${content._id}`);

  return response.json();
}

/**
 * Delete a Reservation from the database.
 * @param token User token, may not succeed if the Reservation is not made by the user
 * @param id Reservation ID to delete
 */
export async function deleteReservation(
  token: string,
  id: string,
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