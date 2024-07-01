import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    items: [
      {
        itemId: {
          type: Schema.Types.ObjectId,
          required: "true",
        },

        qty: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
