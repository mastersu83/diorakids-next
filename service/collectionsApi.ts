import ky from "ky";
import { ICollection } from "@/types/types";

export const getCollections = async (): Promise<ICollection[]> => {
  return await ky("http://localhost:3000/api/collections").json();
};
