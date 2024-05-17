import express from "express";
import Movie from "../models/movieModel";

const router = express.Router();

type DataType = {
  name: string;
  rating: string;
  languages: string;
  imgURL: string;
};

router.post("/", async (req, res) => {
  try {
    const data: DataType = req.body;

    // Validate data
    if (!data.name || !data.rating || !data.languages || !data.imgURL) {
      return res.status(400).send({
        message: "Send all the required fields: name, description, price.",
      });
    }

    // Save into DB
    await Movie.create(data);

    return res.status(200).send({ message: "Movie item added successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
});

export default router;
