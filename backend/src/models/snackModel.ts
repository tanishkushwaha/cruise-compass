import mongoose from "mongoose";

const snackSchema = new mongoose.Schema(
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

const Snack = mongoose.model("Snack", snackSchema);

export default Snack;
