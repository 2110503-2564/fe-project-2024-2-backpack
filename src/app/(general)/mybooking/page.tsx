"use client";
import BookingCard from "@/components/BookingCard";
import { getReservations } from "@/libs/reservation";
import { RootState } from "@/libs/store";
import { Reservation } from "@/types/Reservation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function myBookingList() {
    const [reservations, setReservations] = useState<Reservation[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const { token } = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        const fetchReservations = async () => {
            setIsLoading(true);
            if (!token) return (<div className="h-auto min-h-[90vh] bg-white ">
                <div className="self-stretch text-center justify-start text-black text-6xl font-bold leading-[162.28px]">
                    Log in first to see your bookings!
                </div>
            </div>)
            const res = await getReservations(token);
            if (res.success && "data" in res) {
                setReservations(res.data);
            } else {
                setReservations(undefined);
            }
            setIsLoading(false);
        };
        fetchReservations();
    }, []);
    if (isLoading) return <p>Loading...</p>;
    if (!reservations) return;
    return (
        <div className="h-auto min-h-[90vh] bg-white flex flex-col justify-start items-center">
            <div className="w-4/5 bg-linear-to-t from-sky-500 to-white rounded-[30px] text-center justify-center text-black text-6xl font-bold leading-[162.28px]">
                Your Bookings
            </div>
            <div className="p-5 w-full">
                {reservations.length > 0 ? (
                    reservations.map((rs) => {
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
                                startTime={new Date(rs.reserveDateStart).toISOString().slice(11, 16)}
                                endTime={new Date(rs.reserveDateEnd).toISOString().slice(11, 16)}
                            />
                        );
                    })
                ) : (<div className="self-stretch text-center justify-start text-black text-4xl font-bold leading-[162.28px]">
                    {"No booking :("}
                </div>
                )}
            </div>
        </div>
    );
}
