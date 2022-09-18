import { IBaseText } from "../../interfaces";
import { Schema, model } from "mongoose";

export const BaseText = model(
  "BaseText",
  new Schema<IBaseText>({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    textType: { type: String, enum: ["quote", "text", "list"], required: true },
    title: { type: String, maxlengt: 25 },
    referenceText: { type: String, maxlength: 50 },
    referenceDate: { type: Date },
    dateCreated: { type: Date },
  })
);
