export type MeetingRoom = {
  _id?: string;
  roomNumber: bigint;
  location: string;
  coworkingSpace: string;
  capacity: bigint;
  projector: boolean;
  whiteboard: boolean;
  ledTV: boolean;
  speaker: boolean;
};
