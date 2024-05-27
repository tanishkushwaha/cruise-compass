import express from "express";
import Food from "../models/foodModel";

const router = express.Router();

type DataType = {
  name: string;
  description: string;
  price: number;
  imgURL: string;
};

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find({});

    return res.status(200).send(foods);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const data: DataType = req.body;

    // Validate data
    if (!data.name || !data.description || !data.price || !data.imgURL) {
      return res.status(400).send({
        message:
          "Send all the required fields: name, description, price, imgURL.",
      });
    }

    // Save into DB
    await Food.create(data);

    return res.status(200).send({ message: "Food item added successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
});

export default router;
