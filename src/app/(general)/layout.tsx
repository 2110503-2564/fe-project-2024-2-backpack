"use client"; //just for testing
import { useEffect } from "react";
import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";

// export const metadata: Metadata = {
//   title: "Backpack Co-working Space Reservation",
//   description:
//     "Created for 2110507 - SW DEV PRAC II under the group 'Backpack'",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    localStorage.setItem("role", "user"); // Change to 'user' / 'admin' for testing
    document.cookie = `role=${localStorage.getItem(
      "role"
    )}; path=/; secure; samesite=lax`;
  }, []);

  return (
    <div>
      <Sidebar />
      <TopBar />

      {children}
    </div>
  );
}
