import BookingCard from "@/components/BookingCard";
export default function myBookingList() {
    return (
        <div className="h-auto min-h-[90vh] bg-white ">
            <div className="self-stretch text-center justify-start text-black text-6xl font-bold leading-[162.28px]">
                Your Bookings
            </div>
            <div className="p-5">
                <BookingCard meetingRoomId="1" meetingRoomName="Meeting Room 1" coworkingSpaceName="Menacing Space" date="22 March 2025" startTime="11.00" endTime="12.00" />
            </div>
        </div>
    );
}