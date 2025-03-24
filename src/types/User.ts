export type User = {
  _id?: string;
  name: string;
  email: string;
  telephoneNumber: string;
  password:string;
  role?: "user" | "admin";
  createdAt?: Date;
  __v?: number;
};
