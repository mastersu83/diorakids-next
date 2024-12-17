import { Image } from "@prisma/client";
import { axiosInstance } from "@/service/instance";

export const getImages = async (): Promise<Image[]> => {
  const { data } = await axiosInstance<Image[]>("images");
  return data;
};

export const uploadImages = async (images: File[]): Promise<Image[]> => {
  const formData = new FormData();
  images.forEach((image, i) => {
    formData.append(image.name, image);
  });

  const { data } = await axiosInstance.post<Image[]>("images", formData);

  return data;
};
