import { Request, Response, NextFunction } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import User from "../models/userModel";

type ExtendedRequest = Request & {
  user?: any;
};

const auth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate token
    if (!req.cookies.token) {
      return res.status(401).send({ message: "User not logged in." });
    }

    // Verify token

    const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET!);

    if (typeof decode !== "string" && decode.id) {
      const user = await User.findById(
        decode.id,
        "firstName lastName email phone role"
      );

      if (!user) {
        return res.status(401).send({ message: "Invalid token id" });
      }

      req.user = user;
    }

    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).send({ message: "Invalid token." });
    }
    if (error instanceof Error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
};

export default auth;
