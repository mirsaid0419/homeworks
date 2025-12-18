import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    clientname: { type: String, required: true },
    telephone: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Client=model("Client",clientSchema)
export default Client
