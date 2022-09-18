import { IToken } from "../interfaces";
import { Schema, model } from "mongoose";

export const Token = model(
  "Token",
  new Schema<IToken>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    token: { type: String, required: true },
    dateCreated: { type: Date, required: true },
  })
);
