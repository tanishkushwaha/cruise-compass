import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinary = async (
  localFilePath: string,
  folder: string
) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder,
    });

    return response;
  } catch (error) {
    console.log(error);
    return null;
  } finally {
    // Delete the file from the local storage
    fs.unlinkSync(localFilePath);
  }
};

export { uploadImageToCloudinary };
