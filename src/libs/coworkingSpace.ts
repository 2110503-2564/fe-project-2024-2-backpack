import { CoworkingSpace } from "@/types/CoworkingSpace";
import { BackendResponse } from "@/types/BackendResponses";

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

export async function getCoWorkingSpace(
  id: string
): Promise<BackendResponse<CoworkingSpace>> {
  const response = await fetch(
    `http://localhost:5000/api/coworkingSpace/${id}`,
    {
      method: "GET",
    }
  );

  if (!response.ok)
    throw new Error(`Failed to fetch co-working space of id: ${id}`);

  return response.json();
}

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

export async function updateCoWorkingSpace(
  token: string,
  id: string,
  content: CoworkingSpace
): Promise<BackendResponse<CoworkingSpace>> {
  const response = await fetch(
    `http://localhost:5000/api/coworkingSpace/${id}`,
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
    throw new Error(`Failed to update co-working space of id: ${id}`);

  return response.json();
}

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
