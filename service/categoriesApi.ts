import { ResCategory } from "@/types/types";
import { axiosInstance } from "@/service/instance";

export const getCategories = async (): Promise<ResCategory[]> => {
  const { data } = await axiosInstance<ResCategory[]>("categories");
  return data;
};
