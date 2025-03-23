import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import AdminHomePage from "@/components/AdminHomePage";
import { SubmitButton, YellowButton } from "@/components/OtherComponents";
import AdminObjectCard from "@/components/AdminObjectCard";
import DoraNextPrev from "@/components/DoraPrevNext";
import { EditCoworkingSpace, EditMeetingRoom, EditProfile, EditReservation } from "@/components/EditOverlay";

export default function Home() {
  return (
    <main className="w-[calc(100vw-350px)] min-h-[90vh]">
      <EditMeetingRoom id="2y9rf9oywg9wg020-vw0m-wib-uwbv"/>
    </main>
  );
}
