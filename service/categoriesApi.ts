import ky from "ky";
import { Category } from "@prisma/client";

export const getCategories = async (): Promise<Category[]> => {
  return await ky("http://localhost:3000/api/categories").json();
};
