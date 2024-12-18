import ky from "ky";
import { Collection } from "@prisma/client";

export const getCollections = async (): Promise<Collection[]> => {
  return await ky("http://localhost:3000/api/collections").json();
};
