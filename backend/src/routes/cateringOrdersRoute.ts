import { Router, Request, Response } from "express";
import CateringOrder from "../models/cateringOrder";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body;

    if (!data.customerId || !data.productId || !data.qty) {
      return res.status(400).json({
        message: "Send all the required fields: customerId, productId, qty.",
      });
    }

    const order = await CateringOrder.create(data);

    return res
      .status(200)
      .json({ message: "Order created successfully.", order });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
});
