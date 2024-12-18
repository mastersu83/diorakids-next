import ky from "ky";
import { Collection } from "@prisma/client";

export const getCollections = async (): Promise<Collection[]> => {
  return await ky("/api/collections").json();
};
