import { Router, Request, Response, CookieOptions } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel";

const router = Router();

type DataType = {
  email: string;
  password: string;
};

router.post("/", async (req: Request, res: Response) => {
  try {
    const data: DataType = req.body;

    // Validation
    if (!data.email || !data.password) {
      return res
        .status(400)
        .send({ message: "Send all the required fields: email, password." });
    }

    // Check if the user exists and match credentials
    const user = await User.findOne({ email: data.email });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      return res.status(401).send({ message: "Invaild credentials." });
    }

    // Generate Token
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "3d",
      }
    );

    // Send token as a cookie
    return res
      .status(200)
      .cookie("token", userToken, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 3),
        httpOnly: true,
      })
      .send({
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email,
          role: user.role,
        },
        token: userToken,
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

export default router;
