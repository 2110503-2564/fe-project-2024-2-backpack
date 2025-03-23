// /app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { getUserRole } from "@/libs/getUserRole";

// Define the possible roles
type UserRole = "admin" | "user" | null;

export default function Home() {
  const [role, setRole] = useState<UserRole>(null);

  useEffect(() => {
    const userRole = getUserRole() as UserRole; // Cast to UserRole type
    setRole(userRole);
  }, []);

  if (!role) return <h1>Loading...</h1>;

  return (
    <div>
      {getUserRole()==="user"?
        <h1>Welcome, User! Change role in layout.tsx</h1> // Text for "user"
       : <h1>Welcome, Admin!  Change role in layout.tsx</h1>
       }
    </div>
  );
}
