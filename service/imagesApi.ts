import ky from "ky";
import { Image } from "@prisma/client";

export const getImages = async (): Promise<Image[]> => {
  return await ky("http://localhost:3000/api/images").json();
};

export const uploadImages = async (images: File[]): Promise<Image[]> => {
  const formData = new FormData();
  images.forEach((image, i) => {
    formData.append(image.name, image);
  });

  // const url = Array.from(formData.values());
  //
  // const urlList = url.map((u) => {
  //   return {
  //     type: "1",
  //     typeOfClothing: "Others",
  //     // @ts-ignore
  //     imageUrl: u.name,
  //   };
  // });

  return await ky.post("/api/images", { body: formData }).json();
};
