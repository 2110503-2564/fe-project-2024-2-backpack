"use client";
import BookingCard from "@/components/BookingCard";
import { getUserProfile } from "@/libs/auth";
import { getReservations } from "@/libs/reservation";
import { setCredentials } from "@/libs/slices/authSlice";
import { RootState } from "@/libs/store";
import { Reservation } from "@/types/Reservation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function myBookingList() {
  const [reservations, setReservations] = useState<Reservation[] | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<any>(undefined);

  const { token, role } = useSelector((state: RootState) => state.auth);

  /** admin **/

  // force to fetch
  const [pleaseReload, setPleaseReload] = useState<boolean>(false);

  /** admin **/

  useEffect(() => {
    const fetchReservations = async () => {
      setIsLoading(true);
      if (!token)
        return (
          <div className="h-auto min-h-[90vh] bg-white ">
            <div className="self-stretch text-center justify-start text-black text-6xl font-bold leading-[162.28px]">
              Log in first to see your bookings!
            </div>
          </div>
        );
      const res = await getReservations(token);
      if (res.success && "data" in res) {
        setReservations(res.data);
      } else {
        setReservations(undefined);
      }
      setIsLoading(false);
    };
    fetchReservations();
  }, [pleaseReload]);
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      if (!token) {
        console.log("Failed to fetch profile");
        setProfile(undefined);
        setIsLoading(false);
        return;
      }
      try {
        const response = await getUserProfile(token);
        if (
          response.success &&
          "data" in response &&
          "role" in response.data &&
          "email" in response.data &&
          "telephoneNumber" in response.data &&
          "name" in response.data
        ) {
          setProfile(response.data);
        }
      } catch (error) {
        console.log("Failed to fetch profile:", error);
        setProfile(undefined);
      }

      setIsLoading(false);
    };
    fetchProfile();
  }, [token]);

  if (isLoading) return <p>Loading...</p>;
  if (!token) return <p>Please log in first!</p>;
  return (
    <div className=" gap-7 h-auto min-h-[90vh] bg-white flex flex-col justify-start items-center">
      <div className="w-full p-4 bg-stone-100 flex justify-center text-center text-black">
        <div className="w-2/3 flex items-center gap-8 p-4">
          <Image
            src={"/img/defaultProfile.svg"}
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          {profile ? (
            <div className="text-left">
              <h2 className="text-3xl font-bold">{profile.name}</h2>
              <p className="text-lg text-neutral-600">{profile.role}</p>
              <p className="text-lg text-neutral-600">{profile.email}</p>
              <p className="text-lg text-neutral-600">
                {profile.telephoneNumber}
              </p>
            </div>
          ) : (
            <div className="text-left">loading profile</div>
          )}
        </div>
      </div>

      <div className="w-4/5 p-4 bg-linear-to-t from-sky-500 to-white rounded-[10px] text-center justify-center text-black text-5xl font-bold leading-tight">
        {role === "admin" ? "Everyone's Bookings😈" : "Your Bookings"}
      </div>
      <div className="px-5 gap-5 flex flex-col w-full h-auto">
        {reservations && reservations.length > 0 ? (
          reservations.map((rs) => {
            if(role==="user") rs.user=undefined;
            const dateObj = new Date(rs.reserveDateStart);
            const isoString = dateObj.toISOString();
            const dateParts = isoString.slice(0, 10).split("-");
            const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
            return (
              <BookingCard
                key={rs._id}
                reservationId={rs._id}
                meetingRoomId={rs.meetingRoom._id}
                meetingRoomName={"Meeting Room " + rs.meetingRoom.roomNumber}
                coworkingSpaceName={rs.meetingRoom.coworkingSpace.name}
                date={formattedDate}
                startTime={new Date(rs.reserveDateStart)
                  .toISOString()
                  .slice(11, 16)}
                endTime={new Date(rs.reserveDateEnd)
                  .toISOString()
                  .slice(11, 16)}
                reloadList={() => {
                  setPleaseReload(!pleaseReload);
                }}
                userId={rs.user}
              />
            );
          })
        ) : (
          <div className="self-stretch text-center justify-start text-black text-2xl font-bold leading-[162.28px]">
            {"No booking :("}
          </div>
        )}
      </div>
    </div>
  );
}
