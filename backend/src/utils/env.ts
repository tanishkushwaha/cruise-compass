import { MissingEnvVarError } from "../errors/MissingEnvVarError";

const getEnvVar = (key: string): string => {
  try {
    const value = process.env?.[key];
    if (!value) {
      throw new MissingEnvVarError(key);
    }
    return value;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    process.exit(1);
  }
};

export const env = {
  port: getEnvVar("PORT"),
  frontendUrl: getEnvVar("FRONTEND_URL"),
  dbUri: getEnvVar("MONGODB_URI"),
  jwtSecret: getEnvVar("JWT_SECRET"),
  cloudinary: {
    cloudName: getEnvVar("CLOUDINARY_CLOUD_NAME"),
    apiKey: getEnvVar("CLOUDINARY_API_KEY"),
    apiSecret: getEnvVar("CLOUDINARY_API_SECRET"),
  },
};
