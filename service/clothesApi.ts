import ky from "ky";
import { AddModelFormFields } from "@/components/form/AddModelForm";
import { cloth, image } from "@prisma/client";
import { ResCloth } from "@/types/types";

export const getModels = async (): Promise<ResCloth[]> => {
  return await ky("/api/models").json();
};

export const getCollectionModels = async ({
  collectionId,
}: {
  collectionId: string;
}): Promise<ResCloth[]> => {
  return await ky("/api/models/collection", {
    searchParams: { collectionId },
  }).json();
};

export const createModel = async (
  data: AddModelFormFields & { images: image[] }
): Promise<cloth> => {
  return await ky.post("/api/models", { json: data }).json();
};
