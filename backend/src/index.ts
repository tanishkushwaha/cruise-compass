import mongoose from "mongoose";
import express, { Request, Response } from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/userRoute";
import foodRoute from "./routes/foodRoute";
import snackRoute from "./routes/snackRoute";
import beverageRoute from "./routes/beverageRoute";
import stationeryRoute from "./routes/stationeryRoute";
import loginRoute from "./routes/loginRoute";
import auth from "./middleware/auth";
import logoutRoute from "./routes/logoutRoute";

const app = express();

app.use(
  cors({
    origin: "https://probable-space-computing-machine-j74j6qvq4jp2jj5p-5173.app.github.dev",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/users", userRoute);
app.use("/api/foods", foodRoute);
app.use("/api/snacks", snackRoute);
app.use("/api/beverages", beverageRoute);
app.use("/api/stationeries", stationeryRoute);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello from Cruise Compass API");
});

type ExtendedRequest = Request & {
  user?: any;
};

app.get("/api/user", auth, (req: ExtendedRequest, res: Response) => {
  res.status(200).json({ message: "success", user: req.user });
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
