import { IUser } from "../interfaces";
import { Schema, model } from "mongoose";

export const User = model(
  "User",
  new Schema<IUser>({
    username: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    email: { tyoe: String, required: true },
    isConfirmed: { type: Boolean, default: false },
  })
);
