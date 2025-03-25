"use client";
import AdminObjectCard from "@/components/AdminObjectCard";
import { useState, useEffect } from "react";
import { EditReservation } from "@/components/EditOverlay";
import { YellowButton } from "@/components/YellowButton";
import DoraNextPrev from "@/components/DoraPrevNext";
import { useRouter } from "next/navigation";
import { Reservation } from "@/types/Reservation";
import { deleteReservation, getReservations } from "@/libs/reservation";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";

export default function DashboardReservations() {
  const { token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  // for New button
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [clickId, setClickId] = useState<string>("");
  const clickEdit = (itid: string) => {
    setIsEditOpen(!isEditOpen);
    setClickId(itid);
  };

  // to disable scrolling
  useEffect(() => {
    if (isEditOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isEditOpen]);

  const clickNavi = (itid: string) => {
    router.push(`/dashboard/users/${itid}/bookings`);
  };

  const removeFunction = async (itid: string) => {
    // call DELETE api to remove this id from database
    if (token && token !== null) {
      const res = await deleteReservation(token, itid);
      setPleaseReload(!pleaseReload);
    } else {
      console.log("token is goneee !!!");
      return;
    }
  };

  // force to fetch
  const [pleaseReload, setPleaseReload] = useState<boolean>(false);

  // to fetch data from backend 🗿
  const [bookData, setBookData] = useState<Reservation[]>([]);
  const fetchData = async () => {
    if (token && token !== null) {
      const bData = await getReservations(token);

      if (bData.success === false) {
        alert(bData.message);
        return;
      } else if ("data" in bData) {
        setBookData(bData.data);
      }
    } else {
      console.log("where tokennnnnn TOT");
      return;
    }
  };

  // use effect to deal with async
  useEffect(() => {
    fetchData();
  }, [pleaseReload]);

  return (
    <main className="pb-50 pt-3">
      {bookData.map((item) => (
        <AdminObjectCard
          key={item._id}
          id={item._id}
          uid={item.user}
          mid={item.meetingRoom?._id}
          coid={item.meetingRoom?.coworkingSpace._id}
          coname={item.meetingRoom?.coworkingSpace.name}
          editFunction={clickEdit}
          removeFunction={removeFunction}
        />
      ))}

      {isEditOpen ? (
        <>
          <EditReservation
            id={clickId}
            closeOverlayWhenSubmit={() => setIsEditOpen(!isEditOpen)}
            reloadList={() => setPleaseReload(!pleaseReload)}
          />
          <button
            className="fixed inset-0 bg-black z-70 opacity-40"
            onClick={() => setIsEditOpen(false)}
          ></button>
        </>
      ) : (
        ""
      )}

      <div className="fixed w-[calc(100vw-350px)] h-[90vh] right-0 bottom-0 z-[-10] bg-linear-to-tl from-[#FF8800] to-[#FF0000]" />
    </main>
  );
}
