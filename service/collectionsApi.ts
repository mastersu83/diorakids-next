import { axiosInstance } from "@/service/instance";
import { Collection } from "@prisma/client";

export const getCollections = async (): Promise<Collection[]> => {
  const { data } = await axiosInstance<Collection[]>("collections");
  return data;
};
