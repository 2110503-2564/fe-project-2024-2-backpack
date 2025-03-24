export type Reservation = {
  _id?: string;
  reserveDateStart: Date;
  reserveDateEnd: Date;
  user?: string;
  meetingRoom: string;
  createdAt?: Date;
  __v?: number;
};
