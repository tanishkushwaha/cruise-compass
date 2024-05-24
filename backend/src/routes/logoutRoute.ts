import { Request, Response, Router } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .clearCookie("token")
      .send({ message: "User logged out" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

export default router;
