"use client";
import AdminObjectCard from "@/components/AdminObjectCard";
import { useState, useEffect } from "react";
import { EditCoworkingSpace } from "@/components/EditOverlay";
import { YellowButton } from "@/components/YellowButton";
import DoraNextPrev from "@/components/DoraPrevNext";
import { useRouter } from "next/navigation";
import {
  deleteCoWorkingSpace,
  getCoWorkingSpaces,
} from "@/libs/coworkingSpace";
import { CoworkingSpace } from "@/types/CoworkingSpace";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";

export default function DashboardCoworkingspaces() {
  const { token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  // for new button
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  // to disable scrolling
  useEffect(() => {
    if (isEditOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isEditOpen]);

  const clickNavi = (itid: string) => {
    router.push(`/dashboard/coworkingspaces/${itid}/meetingrooms`);
  };

  const removeFunction = async (itid: string) => {
    if (token && token !== null) {
      const res = await deleteCoWorkingSpace(token, itid);

      // fix remove to dynamic
      if (res.success) {
        setCoworkingData((items) => items.filter((item) => item._id != itid));
      }
    } else {
      console.log("token is goneee !!!");
      return;
    }
  };

  // force to fetch
  const [pleaseReload, setPleaseReload] = useState<boolean>(false);

  // to fetch data from backend 🗿
  const [coworkingData, setCoworkingData] = useState<CoworkingSpace[]>([]);
  const fetchData = async () => {
    const coData = await getCoWorkingSpaces();

    if (coData.success === false) {
      alert(coData.message);
      return;
    } else if ("data" in coData) {
      setCoworkingData(coData.data);
    }
  };

  // use effect to deal with async
  useEffect(() => {
    fetchData();
  }, [pleaseReload]);

  return (
    <main className="pb-50 pt-3">
      <div className="w-(calc[100vw-35opx]) flex justify-center">
        <YellowButton text="New" clickto={() => setIsEditOpen(!isEditOpen)} />
      </div>

      {coworkingData.map((item) =>
        item ? (
          <AdminObjectCard
            key={item._id}
            id={item._id}
            name={item.name}
            editFunction={clickNavi}
            removeFunction={removeFunction}
          />
        ) : (
          ""
        ),
      )}

      {isEditOpen ? (
        <>
          <EditCoworkingSpace
            id="{New Coworking space}"
            closeOverlayWhenSubmit={() => setIsEditOpen(false)}
            type="new"
            reloadList={() => {
              setPleaseReload(!pleaseReload);
            }}
          />
          <button
            className="fixed inset-0 bg-black z-70 opacity-40"
            onClick={() => setIsEditOpen(false)}
          ></button>
        </>
      ) : (
        ""
      )}

      <div className="fixed w-[calc(100vw-350px)] h-[90vh] right-0 bottom-0 z-[-10] bg-linear-to-tl from-[#06F157] to-[#01C3FF]" />
    </main>
  );
}
