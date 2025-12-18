import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    clientId: { type: mongoose.Types.ObjectId, required: true, ref: "Client" },
    foodId: { type: mongoose.Types.ObjectId, required: true, ref: "Food" },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: "faqat butun son kiritish kerak",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = model("Order",orderSchema)

export default Order