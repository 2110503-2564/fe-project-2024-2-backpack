import { User } from "@/types/User";
import { BackendResponse } from "@/types/BackendResponses";
import { backendUrl } from "./url";

/**
 * Register a new user, always assign the "user" role.
 * @param content User detail, required as type.
 */
export async function userRegister(
  content: User,
): Promise<BackendResponse<User>> {
  content.role = "user"; // always user on registration

  const response = await fetch(`${backendUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) throw new Error("Registration Failed");

  return response.json();
}

/**
 * Log-in a user into the system
 * @param userEmail User email
 * @param userPassword User password
 * @returns Refer to LoginSuccessResponse interface in src/types/BackendResponses.ts
 */
export async function userLogIn(
  userEmail: string,
  userPassword: string,
): Promise<BackendResponse<User>> {
  const response = await fetch(`${backendUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });

  if (!response.ok) throw new Error("Log-in Failed");

  return response.json();
}

/**
 * Log-out a user from the system
 * @param token User token to log out
 */
export async function userLogOut(
  token: string,
): Promise<BackendResponse<User>> {
  const response = await fetch(`${backendUrl}/auth/logout`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Log-out Failed");

  return response.json();
}

/**
 * Gets the Logged-in user detail
 * @param token User token
 */
export async function getUserProfile(
  token: string,
): Promise<BackendResponse<User>> {
  const response = await fetch(`${backendUrl}/auth/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch user profile");

  return response.json();
}
