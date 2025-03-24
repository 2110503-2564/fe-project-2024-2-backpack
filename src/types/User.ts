export type User = {
  _id?: string;
  name: string;
  email: string;
  telephoneNumber: string;
  role?: "user" | "admin";
  password: string;
  createdAt?: Date;
  __v?: number;
};
