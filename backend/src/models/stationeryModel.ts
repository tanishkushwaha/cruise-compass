import mongoose from "mongoose";

const stationerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    imgURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stationery = mongoose.model("Stationery", stationerySchema);

export default Stationery;
