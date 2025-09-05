import mongoose from "mongoose";
import { env } from "./env";

export const connectDb = async () => {
  try {
    await mongoose.connect(env.dbUri);
    console.log("DB Connected!");
  } catch (err) {
    if (err instanceof Error) {
      console.error(`MONGODB ERROR: ${err.message}`);
    }
    process.exit(1);
  }
};
