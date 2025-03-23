import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import AdminHomePage from "@/components/AdminHomePage";
import { YellowButton } from "@/components/YellowButton";
import AdminObjectCard from "@/components/AdminObjectCard";

export default function DashboardHome() {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full">
        <AdminHomePage/>
      </div>
    </main>
  );
}
