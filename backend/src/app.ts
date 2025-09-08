import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import auth from "./middleware/auth";
import beverageRoute from "./routes/beverageRoute";
import foodRoute from "./routes/foodRoute";
import loginRoute from "./routes/loginRoute";
import logoutRoute from "./routes/logoutRoute";
import snackRoute from "./routes/snackRoute";
import stationeryRoute from "./routes/stationeryRoute";
import userRoute from "./routes/userRoute";
import { env } from "./utils/env";

type ExtendedRequest = Request & {
  user?: any;
};

const app = express();

app.use(
  cors({
    origin: env.frontendUrl,
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

app.get("/api/me", auth, (req: ExtendedRequest, res: Response) => {
  res.status(200).json({ message: "success", user: req.user });
});

export default app;
