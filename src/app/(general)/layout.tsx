"use client";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      <TopBar />
      {children}
    </div>
  );
}
