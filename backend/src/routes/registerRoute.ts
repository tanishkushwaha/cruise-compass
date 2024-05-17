import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import { generate } from "generate-password";

const router = express.Router();

type DataType = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  role: string;
};

router.post("/", async (req, res) => {
  try {
    const data: DataType = req.body;

    // Validate data
    if (
      !data.firstName ||
      !data.lastName ||
      !data.phone ||
      !data.email ||
      !data.role
    ) {
      return res.status(400).send({
        message:
          "Send all the required fields: firstName, lastName, phone, email, role",
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res.status(401).send({ message: "Email already exists." });
    }

    // Hash password
    // const encPass = await bcrypt.hash(data.password, 10);

    // Save into DB
    await User.create({
      ...data,
      password: generate({
        length: 8,
        numbers: true,
      }),
    });

    return res.status(200).send({ message: "User registered successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
});

export default router;
