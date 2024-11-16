import ky from "ky";
import { IImage } from "@/types/types";

export const getImages = async (): Promise<IImage[]> => {
  return await ky("http://localhost:3000/api/images").json();
};

export const uploadImages = async (images: File[]) => {
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

  await ky.post("/api/images", { body: formData });
};
