import express from "express";
import Food from "../models/foodModel";
import { upload } from "../utils/multer";
import { uploadImageToCloudinary } from "../utils/cloudinary";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find({}, "-__v -createdAt -updatedAt");

    return res.status(200).send(foods);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

router.post("/", upload.single("imgFile"), async (req, res) => {
  try {
    const data: { name: string; description: string; price: number } = req.body;

    // Validate data
    if (!data.name || !data.description || !data.price || !req.file) {
      return res.status(400).json({
        message:
          "Send all the required fields: name, description, price, image.",
      });
    }

    // Upload image to cloudinary
    const imgURL = req.file.path;
    const response = await uploadImageToCloudinary(imgURL, "food");

    if (!response) {
      return res.status(500).json({ message: "Failed to upload image." });
    }

    // Save into DB
    await Food.create({
      ...data,
      imgURL: response.secure_url,
    });

    return res.status(200).json({
      message: "Food item added successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Delete from DB
    await Food.findByIdAndDelete(id);

    return res.status(200).json({ message: "Food item deleted successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

router.put("/:id", upload.single("imgFile"), async (req, res) => {
  try {
    const id = req.params.id;
    const data: { name: string; description: string; price: number } = req.body;

    // Validate data
    if (!data.name || !data.description || !data.price || !req.file) {
      return res.status(400).json({
        message:
          "Send all the required fields: name, description, price, image.",
      });
    }

    // Upload image to cloudinary
    const imgPath = req.file.path;
    const response = await uploadImageToCloudinary(imgPath, "food");

    if (!response) {
      return res.status(500).json({ message: "Failed to upload image." });
    }

    const imgURL = response.secure_url;

    // Update the food item
    await Food.findByIdAndUpdate(id, {
      ...data,
      imgURL,
    });

    return res.status(200).json({ message: "Food item updated successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
});

export default router;
