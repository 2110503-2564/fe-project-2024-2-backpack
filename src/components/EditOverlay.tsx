"use client";
import { ReactNode } from "react";
import { SubmitButton } from "./OtherComponents";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/store";
import { getReservation, updateReservation } from "@/libs/reservation";
import {
  createMeetingRoom,
  getMeetingRoom,
  updateMeetingRoom,
} from "@/libs/meetingRoom";
import { MeetingRoom } from "@/types/MeetingRoom";
import {
  createCoWorkingSpace,
  getCoWorkingSpace,
  updateCoWorkingSpace,
} from "@/libs/coworkingSpace";
import { CoworkingSpace } from "@/types/CoworkingSpace";
import { Reservation } from "@/types/Reservation";

export function EditBg({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <div
      className="h-[70px] w-auto rounded-xl py-3 px-5 grid grid-cols-4 place-content-center"
      style={{ backgroundImage: "var(--color-editgradient)" }}
    >
      <div className="text-xl font-bold text-center text-balance">{text}</div>
      <div className="col-span-3 text-lg text-wrap px-1 h-fit self-center">
        {children}
      </div>
    </div>
  );
}

export function EditReservation({
  id,
  closeOverlayWhenSubmit,
  type,
  reloadList,
}: {
  id: string;
  closeOverlayWhenSubmit: Function;
  type?: string;
  reloadList: Function;
}) {
  const { token } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    _id: id,
    reserveDateStart: new Date(0) as Date,
    reserveDateEnd: new Date(0) as Date,
    user: "",
    meetingRoom: null as MeetingRoom | null,
  });

  // for type !== new
  useEffect(() => {
    const fetchData = async () => {
      if (token && token !== null) {
        const res = await getReservation(token, id);
        if (res.success === false) {
          alert(res.message);
          return;
        } else if ("data" in res) {
          let cws: Reservation[] = [];
          if (!Array.isArray(res.data)) {
            cws = [res.data];
          }
          console.log(cws[0]);
          setFormData({
            _id: id,
            reserveDateStart:
              new Date(cws[0].reserveDateStart) || formData.reserveDateStart,
            reserveDateEnd:
              new Date(cws[0].reserveDateEnd) || formData.reserveDateEnd,
            user: cws[0].user || "",
            meetingRoom: cws[0].meetingRoom || null,
          });
        }
      }
    };
    fetchData();
  }, []);

  // handle change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name == "reserveDateStart" || name == "reserveDateEnd") {
      setFormData({
        ...formData,
        [name]: new Date(value + "Z"),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (token) {
      const res = await updateReservation(token, formData as Reservation);

      if (!res.success) {
        alert("Can't update reservation");
        return;
      } else {
        reloadList();
      }
    } else {
      console.error(
        "cannot send req because token is undefined ! (update reservation)"
      );
    }

    closeOverlayWhenSubmit();
  };

  const toInputDatetime = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    const month = pad(date.getUTCMonth() + 1);
    const day = pad(date.getUTCDate());
    const hours = pad(date.getUTCHours());
    const minutes = pad(date.getUTCMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
      style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="relative w-full h-[75vh] p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mb-[60px]">
            <EditBg text="User ID">
              <h2 className="">{id}</h2>
            </EditBg>
            <EditBg text="Co-working space">
              <h2 className="">
                {formData.meetingRoom
                  ? formData.meetingRoom.coworkingSpace.name
                  : ""}
              </h2>
            </EditBg>
            <EditBg text="Meeting room">
              <h2 className="">
                {formData.meetingRoom ? formData.meetingRoom.roomNumber : ""}
              </h2>
            </EditBg>

            <div className="grid grid-cols-2 w-full gap-x-3 gap-y-4">
              <EditBg text="From">
                <input
                  type="datetime-local"
                  name="reserveDateStart"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={toInputDatetime(formData.reserveDateStart)}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="To">
                <input
                  type="datetime-local"
                  name="reserveDateEnd"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={toInputDatetime(formData.reserveDateEnd)}
                  onChange={handleChange}
                />
              </EditBg>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export function EditMeetingRoom({
  id,
  closeOverlayWhenSubmit,
  type,
  co,
  reloadList,
}: {
  id: string;
  closeOverlayWhenSubmit: Function;
  type?: string;
  co?: CoworkingSpace;
  reloadList: Function;
}) {
  const { token } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState({
    roomNumber: 0,
    location: "",
    coworkingSpace: co,
    capacity: 0,
    projector: false,
    whiteBoard: false,
    ledTV: false,
    speaker: false,
  });

  // for type !== new
  useEffect(() => {
    if (type !== "new") {
      const fetchData = async () => {
        const res = await getMeetingRoom(id);
        if (res.success === false) {
          alert(res.message);
          return;
        } else if ("data" in res) {
          let cws: MeetingRoom[] = [];
          if (!Array.isArray(res.data)) {
            cws = [res.data];
          }
          setFormData({
            roomNumber: cws[0].roomNumber || -1,
            location: cws[0].location || "",
            coworkingSpace: cws[0].coworkingSpace || null,
            capacity: cws[0].capacity || -1,
            projector: cws[0].projector || false,
            whiteBoard: cws[0].whiteBoard || false,
            ledTV: cws[0].ledTV || false,
            speaker: cws[0].speaker || false,
          });
        }
      };

      fetchData();
    }
  }, []);

  // handle change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value, // ✅ Use checked for checkboxes
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type !== "new") {
      const payload = {
        ...formData,
        ...{ _id: id },
      };

      if (token) {
        const res = await updateMeetingRoom(token, payload as MeetingRoom);

        if (!res.success) {
          alert("Can't update meeting room");
          return;
        } else {
          reloadList();
          console.log("create success");
        }
      } else {
        console.error(
          "cannot send req because token is undefined ! (update meetingroom)"
        );
      }
    } else {
      console.log(formData);

      if (token) {
        const res = await createMeetingRoom(token, formData as MeetingRoom);

        if (!res.success) {
          alert("Can't create meeting room");
          return;
        } else {
          reloadList();
          console.log("create success");
        }
      } else {
        console.error(
          "cannot send req because token is undefined ! (create meetingroom)"
        );
      }
    }
    closeOverlayWhenSubmit();
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
      style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="relative w-full h-[75vh] p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mb-[60px]">
            <EditBg text="Meeting room ID">
              <h2 className="">{id}</h2>
            </EditBg>
            <EditBg text="Location">
              <input
                type="text"
                name="location"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                value={formData.location}
                onChange={handleChange}
              />
            </EditBg>
            <div className="grid grid-cols-3 w-full gap-x-3 gap-y-4">
              <EditBg text="Room Number">
                <input
                  type="number"
                  name="roomNumber"
                  min="1"
                  className="w-9/10 focus:ring-2 focus:ring-white outline-none rounded-md px-2 ml-5"
                  value={formData.roomNumber}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Projector">
                <input
                  type="checkbox"
                  name="projector"
                  className="w-full outline-none rounded-md px-2 h-[20px]"
                  checked={formData.projector}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="LedTV">
                <input
                  type="checkbox"
                  name="ledTV"
                  className="w-full outline-none rounded-md px-2 h-[20px]"
                  checked={formData.ledTV}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Capacity">
                <input
                  type="number"
                  name="capacity"
                  min="1"
                  className="w-9/10 focus:ring-2 focus:ring-white outline-none rounded-md px-2 ml-5"
                  value={formData.capacity}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Whiteboard">
                <input
                  type="checkbox"
                  name="whiteBoard"
                  className="w-full outline-none rounded-md px-2 h-[20px]"
                  checked={formData.whiteBoard}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Speaker">
                <input
                  type="checkbox"
                  name="speaker"
                  className="w-full outline-none rounded-md px-2 h-[20px]"
                  checked={formData.speaker}
                  onChange={handleChange}
                />
              </EditBg>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export function EditCoworkingSpace({
  id,
  closeOverlayWhenSubmit,
  reloadList,
  type,
}: {
  id?: string;
  closeOverlayWhenSubmit: Function;
  reloadList: Function;
  type?: string;
}) {
  const { token } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    district: "",
    province: "",
    postalcode: "",
    tel: "",
    region: "",
    open_time: new Date("2025-04-18T17:00:00.000z"),
    close_time: new Date("2025-04-18T17:00:00.000z"),
  });

  // for type !== new
  useEffect(() => {
    if (type !== "new" && id) {
      const fetchData = async () => {
        const res = await getCoWorkingSpace(id);
        // if (res.success === false) {
        //   alert(res.message);
        //   return;
        // } else
        if ("data" in res) {
          let cws: CoworkingSpace[] = [];
          if (!Array.isArray(res.data)) {
            cws = [res.data];
          }
          setFormData({
            name: cws[0].name || "",
            address: cws[0].address || "",
            district: cws[0].district || "",
            province: cws[0].province || "",
            postalcode: cws[0].postalcode || "",
            tel: cws[0].tel || "",
            region: cws[0].region || "",
            open_time: cws[0].open_time || formData.open_time,
            close_time: cws[0].close_time || formData.open_time,
          });
        }
      };

      fetchData();
    }
  }, []);

  // handle change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name == "open_time" || name == "close_time") {
      setFormData({
        ...formData,
        [name]: new Date(`2025-04-19T${value}:00.000Z`),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (type !== "new") {
      const payload = {
        ...formData,
        ...(id ? { _id: id } : {}),
      };

      if (token) {
        const res = await updateCoWorkingSpace(
          token,
          payload as CoworkingSpace
        );

        if (!res.success) {
          alert("Can't update meeting room");
          return;
        } else {
          reloadList();
          console.log("edit success");
        }
      } else {
        console.error(
          "cannot send req because token is undefined ! (update coworkingspace)"
        );
      }
    } else {
      if (token) {
        console.log(formData);
        const res = await createCoWorkingSpace(
          token,
          formData as CoworkingSpace
        );

        if (!res.success) {
          alert("Can't create meeting room");
          return;
        } else {
          reloadList();
          console.log("create success");
        }
      } else {
        console.error(
          "cannot send req because token is undefined ! (create coworkingspace)"
        );
      }
    }

    closeOverlayWhenSubmit();
  };

  // convert Date -> time
  const toLocalTimeInput = (date: Date) => {
    const tmp = date.toISOString().slice(11, 16);
    console.log(tmp);
    return tmp; // Format: "HH:MM"
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] max-h-[100vh]
        border-4 border-black rounded-2xl"
      style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="relative w-full min-h-[75vh] p-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 mb-[60px]">
            <EditBg text="Co-working Space ID">
              <h2>{id}</h2>
            </EditBg>
            <EditBg text="Name">
              <input
                type="text"
                name="name"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                value={formData.name}
                onChange={handleChange}
              />
            </EditBg>
            <div className="grid grid-cols-2 w-full gap-x-3 gap-y-4">
              <EditBg text="Address">
                <input
                  type="text"
                  name="address"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={formData.address}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="District">
                <input
                  type="text"
                  name="district"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={formData.district}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Province">
                <input
                  type="text"
                  name="province"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={formData.province}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Postal code">
                <input
                  type="text"
                  name="postalcode"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={formData.postalcode}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Telephone">
                <input
                  type="text"
                  name="tel"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={formData.tel}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Region">
                <input
                  type="text"
                  name="region"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={formData.region}
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Open">
                <input
                  type="time"
                  name="open_time"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={
                    formData.open_time
                      ? toLocalTimeInput(new Date(formData.open_time))
                      : ""
                  }
                  onChange={handleChange}
                />
              </EditBg>
              <EditBg text="Close">
                <input
                  type="time"
                  name="close_time"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                  value={
                    formData.close_time
                      ? toLocalTimeInput(new Date(formData.close_time))
                      : ""
                  }
                  onChange={handleChange}
                />
              </EditBg>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
