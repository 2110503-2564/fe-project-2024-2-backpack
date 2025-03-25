"use client";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import { NoticeProvider } from "@/components/NoticeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NoticeProvider>
      <div>
        <Sidebar />
        <TopBar />
        {children}
      </div>
    </NoticeProvider>
  );
}
