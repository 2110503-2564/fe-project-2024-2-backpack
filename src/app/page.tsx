import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import AdminHomePage from "@/components/AdminHomePage";

export default function Home() {
  return (
    <main className="w-[100vw]">
      <AdminHomePage/>
    </main>
  );
}
