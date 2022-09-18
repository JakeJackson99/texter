import { Document, Types } from "mongoose";

export interface IBaseText extends Document {
  userId: Types.ObjectId;
  textType: string; // Enum, to be defined
  title?: string;
  referenceText?: string;
  referenceDate?: Date;
  dateCreated: Date;
  dateModified: Date;
}
