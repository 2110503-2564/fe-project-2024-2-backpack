import { User } from "@/types/User";
import { BackendResponse } from "@/types/BackendResponses";

export async function userRegister(
  content: User
): Promise<BackendResponse<User>> {
  content.role = "user"; // always user on registration

  const response = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });

  if (!response.ok) throw new Error("Registration Failed");

  return response.json();
}

export async function userLogIn(
  userEmail: string,
  userPassword: string
): Promise<BackendResponse<User>> {
  const response = await fetch("http://localhost:5000/api/auth/login", {
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

export async function userLogOut(
  token: string
): Promise<BackendResponse<User>> {
  const response = await fetch("http://localhost:5000/api/auth/logout", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Log-out Failed");

  return response.json();
}

export async function getUserProfile(
  token: string
): Promise<BackendResponse<User>> {
  const response = await fetch("http://localhost:5000/api/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch user profile");

  return response.json();
}
