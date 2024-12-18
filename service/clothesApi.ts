import ky from "ky";
import { AddModelFormFields } from "@/components/form/AddModelForm";
import { IImage, ResCloth } from "@/types/types";
import { Cloth } from "@prisma/client";

export const getModels = async (): Promise<ResCloth[]> => {
  return await ky("/api/models").json();
};

export const getCollectionModels = async ({
  collectionId,
}: {
  collectionId: number;
}): Promise<ResCloth[]> => {
  return await ky("/api/models/collection", {
    searchParams: { collectionId },
  }).json();
};
export const getCollectionAndCategoryModels = async ({
  collectionId,
  categoryId,
}: {
  collectionId: number;
  categoryId: number;
}): Promise<ResCloth[]> => {
  return await ky("/api/models/category-collection", {
    searchParams: { collectionId, categoryId },
  }).json();
};
export const getCategoryModels = async ({
  categoryId,
}: {
  categoryId: number;
}): Promise<ResCloth[]> => {
  return await ky("/api/models/category", {
    searchParams: { categoryId },
  }).json();
};

export const createModel = async (
  data: AddModelFormFields & { images: IImage[] }
): Promise<Cloth> => {
  return await ky.post("/api/models", { json: data }).json();
};

export const editModel = async (
  data: AddModelFormFields & { images: IImage[] } & { modelId: number }
): Promise<Cloth> => {
  return await ky.put("/api/models", { json: data }).json();
};
