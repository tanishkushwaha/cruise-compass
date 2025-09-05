import { config } from "dotenv";
config();
import { connectDb } from "./utils/db";
import app from "./app";
import { env } from "./utils/env";

const startServer = async () => {
  try {
    await connectDb();
    app.listen(env.port, () => console.log(`Listening on port ${env.port}`));
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Startup Failed: ${err.message}`);
      process.exit(1);
    }
  }
};

startServer();
