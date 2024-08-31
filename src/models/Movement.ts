import { Schema, model, Document } from "mongoose";

interface IMovement extends Document {
  initialPosition: string;
  commands: string;
  finalPosition: string;
  log: string[];
}

export const movementShema = new Schema(
  {
    initialPosition: {
      type: String,
      required: true,
    },
    commands: {
      type: String,
      required: true,
    },
    finalPosition: {
      type: String,
      required: true,
    },
    log: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const Movement = model<IMovement>("Movement", movementShema);
