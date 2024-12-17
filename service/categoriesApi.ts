import ky from "ky";
import { ICategory } from "@/types/types";

export const getCategories = async (): Promise<ICategory[]> => {
  return await ky("http://localhost:3000/api/categories").json();
};
