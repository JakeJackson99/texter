import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  first: string;
  last: string;
  hashedPassword: string;
  email: string;
  isConfirmed?: boolean;
}
