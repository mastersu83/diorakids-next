import ky from "ky";
import { Image } from "@prisma/client";

export const getImages = async (): Promise<Image[]> => {
  return await ky("/api/images").json();
};

export const uploadImages = async (images: File[]): Promise<Image[]> => {
  const formData = new FormData();
  images.forEach((image, i) => {
    formData.append(image.name, image);
  });
  return await ky.post("/api/images", { body: formData }).json();
};
