import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { config } from "dotenv";
config();
import registerRoute from "./routes/registerRoute";
import foodRoute from "./routes/foodRoute";
import snackRoute from "./routes/snackRoute";
import beverageRoute from "./routes/beverageRoute";
import stationeryRoute from "./routes/stationeryRoute";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/users", registerRoute);
app.use("/api/food", foodRoute);
app.use("/api/snacks", snackRoute);
app.use("/api/beverages", beverageRoute);
app.use("/api/stationery", stationeryRoute);

app.get("/hello", (req: Request, res: Response) => {
  res.send("hello world");
});

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("DB Connected!");
    app.listen(8080, () => {
      console.log("Listening on port 8080");
    });
  })
  .catch((err) => console.log(err));
