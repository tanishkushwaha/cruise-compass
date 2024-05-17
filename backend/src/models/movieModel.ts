import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rating: {
      type: String,
      required: true,
    },

    languages: {
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

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
