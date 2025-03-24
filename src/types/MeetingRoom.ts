import { CoworkingSpace } from "./CoworkingSpace";

export type MeetingRoom = {
  _id?: string;
  roomNumber: number;
  location: string;
  coworkingSpace: CoworkingSpace;
  capacity: number;
  projector: boolean;
  whiteboard: boolean;
  ledTV: boolean;
  speaker: boolean;
  __v?: number;
};
