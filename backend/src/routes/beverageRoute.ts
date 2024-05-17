import express from "express";
import Beverage from "../models/beverageModel";

const router = express.Router();

type DataType = {
  name: string;
  description: string;
  price: number;
  imgURL: string;
};

router.post("/", async (req, res) => {
  try {
    const data: DataType = req.body;

    // Validate data
    if (!data.name || !data.description || !data.price || !data.imgURL) {
      return res.status(400).send({
        message: "Send all the required fields: name, description, price.",
      });
    }

    // Save into DB
    await Beverage.create(data);

    return res
      .status(200)
      .send({ message: "Beverage item added successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
});

export default router;
