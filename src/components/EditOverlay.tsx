import { ReactNode } from "react";
import { SubmitButton } from "./OtherComponents";
import { useRef, useState, useEffect } from "react";
import { getReservation } from "@/libs/reservation";
import { getMeetingRoom, updateMeetingRoom } from "@/libs/meetingRoom";

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

export function EditProfile({
  id,
  closeOverlayWhenSubmit,
  type,
}: {
  id: string;
  closeOverlayWhenSubmit: Function;
  type?: string;
}) {
  // ไม่ได้ใช้ละ

  // send data to backend when submit
  const formRef = useRef(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload <chat>

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    // Convert FormData to a JSON object <chat>
    const data = Object.fromEntries(formData);

    // Send to backend
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(JSON.stringify(data));
  };

  const submitData = () => {};

  return (
    <div
      className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
      style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="relative w-full h-[75vh] p-5">
        <div className="flex flex-col space-y-4 mb-[60px]">
          <form ref={formRef}>
            <EditBg text="User ID">
              <h2 className="">{id}</h2>
            </EditBg>
            <EditBg text="Name">
              <input
                type="text"
                name="name"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
              />
            </EditBg>
            <EditBg text="Email">
              <input
                type="text"
                name="email"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
              />
            </EditBg>
            <EditBg text="Password">
              <input
                type="password"
                name="password"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
              />
            </EditBg>
          </form>
        </div>

        <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
          <SubmitButton
            clickto={() => {
              closeOverlayWhenSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export async function EditReservation({
  id,
  closeOverlayWhenSubmit,
  type,
}: {
  id: string;
  closeOverlayWhenSubmit: Function;
  type?: string;
}) {
  // const thisReservation = await getReservation(token, id)

  return (
    <div
      className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] 
        border-4 border-black rounded-2xl"
      style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="relative w-full h-[75vh] p-5">
        <div className="flex flex-col space-y-4 mb-[60px]">
          <EditBg text="User ID">
            <h2 className="">{id}</h2>
          </EditBg>
          <EditBg text="Co-working space">
            {/* fetch Co-working space name from backend ? */}
            <input
              type="text"
              className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
            />
          </EditBg>
          <EditBg text="Meeting room">
            {/* fetch Meeting room name from backend ? */}
            <input
              type="number"
              name="meetingRoom"
              min="1"
              className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
            />
          </EditBg>
          <div className="grid grid-cols-2 w-full gap-x-3 gap-y-4">
            <EditBg text="From">
              <input
                type="datetime-local"
                name="reserveDateStart"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
              />
            </EditBg>
            <EditBg text="To">
              <input
                type="datetime-local"
                name="reserveDateEnd"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
              />
            </EditBg>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
          <SubmitButton
            clickto={() => {
              closeOverlayWhenSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function EditMeetingRoom({
  id,
  closeOverlayWhenSubmit,
  type,
  coid,
}: {
  id: string;
  closeOverlayWhenSubmit: Function;
  type?: string;
  coid?: string;
}) {
  const [formData, setFormData] = useState({
    _id: "",
    roomNumber: -1,
    location: "",
    coworkingSpace: "",
    capacity: -1,
    projector: false,
    whiteboard: false,
    ledTV: false,
    speaker: false,
  });

  const fetchData = async () => {
    const res = await getMeetingRoom(id);
    if (res.success === false) {
      alert(res.message);
      return;
    } else if ("data" in res) {
      setFormData({
        _id: id,
        roomNumber: res.data[0].roomNumber || -1,
        location: res.data[0].location || "",
        coworkingSpace: res.data[0].coworkingSpace || "",
        capacity: res.data[0].capacity || -1,
        projector: res.data[0].projector || false,
        whiteboard: res.data[0].whiteboard || false,
        ledTV: res.data[0].ledTV || false,
        speaker: res.data[0].speaker || false,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // handle change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }



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
                  name="whiteboard"
                  className="w-full outline-none rounded-md px-2 h-[20px]"
                  checked={formData.whiteboard}
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
          <SubmitButton
            clickto={() => {
              closeOverlayWhenSubmit();
            }}
          />
        </div>
        </form>
      </div>
    </div>
  );
}

export function EditCoworkingSpace({
  id,
  closeOverlayWhenSubmit,
  type,
}: {
  id: string;
  closeOverlayWhenSubmit: Function;
  type?: string;
}) {
  // set submit button to check if use POST or PUT
  const clickSubmit = () => {
    if (type === "new") {
      // get all info
      // call POST api
    } else {
      // get all info
      // call PUT api
    }
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 transfrom -translate-1/2 z-90 bg-white w-[calc(100vw-500px)] min-h-[75vh] max-h-[100vh]
        border-4 border-black rounded-2xl"
      style={{ boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.6)" }}
    >
      <div className="relative w-full min-h-[75vh] p-5">
        <form>
          <div className="flex flex-col space-y-4 mb-[60px]">
            <EditBg text="Co-working Space ID">
              <h2>{id}</h2>
            </EditBg>
            <EditBg text="Name">
              <input
                type="text"
                className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
              />
            </EditBg>
            <div className="grid grid-cols-2 w-full gap-x-3 gap-y-4">
              <EditBg text="Address">
                <input
                  type="text"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Distinct">
                <input
                  type="text"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Province">
                <input
                  type="text"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Postal code">
                <input
                  type="text"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Telephone">
                <input
                  type="text"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Region">
                <input
                  type="text"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Open">
                <input
                  type="time"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
              <EditBg text="Close">
                <input
                  type="time"
                  className="w-full focus:ring-2 focus:ring-white outline-none rounded-md px-2"
                />
              </EditBg>
            </div>
          </div>
        </form>

        <div className="absolute bottom-4 left-1/2 tranfrom -translate-x-1/2 w-auto h-fit">
          <SubmitButton
            clickto={() => {
              closeOverlayWhenSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
}
