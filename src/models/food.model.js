import { Schema, model } from "mongoose";

const foodSchema = new Schema(
  {
    foodname: { type: String, required: true, unique: true },
    foodphoto: { type: String, required: true, unique: true },
  },
  { versionKey: false }
);

const food = model("Food", foodSchema);
export default food;
