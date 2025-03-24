import { MeetingRoom } from "./MeetingRoom";

export type Reservation = {
  _id?: string;
  reserveDateStart: Date;
  reserveDateEnd: Date;
  user?: string;
  meetingRoom?: MeetingRoom;
  createdAt?: Date;
  __v?: number;
};
