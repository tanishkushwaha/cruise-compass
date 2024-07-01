import mongoose, { Schema } from "mongoose";

const cateringOrderSchema = new mongoose.Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        itemId: {
          type: Schema.Types.ObjectId,
          ref: "",
          required: true,
        },

        qty: {
          type: Number,
          required: true,
        },
      },
    ],

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Preparing", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const CateringOrder = mongoose.model("CateringOrder", cateringOrderSchema);

export default CateringOrder;
