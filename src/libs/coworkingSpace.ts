import { CoworkingSpace } from "@/types/CoworkingSpace";
import { BackendResponse } from "@/types/BackendResponses";

/**
 * Fetch all Co-working Spaces from the database by default.
 * @param page If given, returns data on specific page
 */
export async function getCoWorkingSpaces(
  page?: string
): Promise<BackendResponse<CoworkingSpace>> {
  let responseString: string = `http://localhost:5000/api/coworkingSpace`;

  if (page) responseString += `?page=${page}`;

  const response = await fetch(responseString, {
    method: "GET",
  });

  if (!response.ok)
    throw new Error(`Failed to fetch co-working spaces of page: ${page}`);

  return response.json();
}

/**
 * Fetch a single Co-working Space by the given ID.
 * @param id Co-working Space ID to retrieve
 */
export async function getCoWorkingSpace(
  id: string
): Promise<BackendResponse<CoworkingSpace>> {
  const response = await fetch(
    `http://localhost:5000/api/coworkingSpace/${id}}`,
    {
      method: "GET",
    }
  );

  if (!response.ok)
    throw new Error(`Failed to fetch co-working space of id: ${id}`);

  return response.json();
}

/**
 * Create a new Co-working Space if allowed.
 * @param token User token, must have the admin role
 * @param content Co-working Space detail, required as type
 */
export async function createCoWorkingSpace(
  token: string,
  content: CoworkingSpace
): Promise<BackendResponse<CoworkingSpace>> {
  const response = await fetch(`http://localhost:5000/api/coworkingSpace`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) throw new Error("Failed to create new co-working space");

  return response.json();
}

/**
 * Update a Co-working Space with the given content.
 * @param token User token, must have admin role
 * @param content Co-working Space detail, require as type AND _id
 */
export async function updateCoWorkingSpace(
  token: string,
  content: CoworkingSpace
): Promise<BackendResponse<CoworkingSpace>> {
  if (!content._id) throw new Error("No ID given on CoworkingSpace update");

  const response = await fetch(
    `http://localhost:5000/api/coworkingSpace/${content._id}`,
    {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  );

  if (!response.ok)
    throw new Error(`Failed to update co-working space of id: ${content._id}`);

  return response.json();
}

/**
 * Delete a Co-working Space from the database.
 * @param token User token, must have admin role
 * @param id Co-working Space ID to delete
 */
export async function deleteCoWorkingSpace(
  token: string,
  id: string
): Promise<BackendResponse<CoworkingSpace>> {
  const response = await fetch(
    `http://localhost:5000/api/coworkingSpace/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok)
    throw new Error(`Failed to update co-working space of id: ${id}`);

  return response.json();
}
