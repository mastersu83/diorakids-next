import { AddModelFormFields } from "@/components/form/AddModelForm";
import { IImage, ResCloth } from "@/types/types";
import { Cloth } from "@prisma/client";
import { axiosInstance } from "@/service/instance";

export const getModels = async (): Promise<ResCloth[]> => {
  const { data } = await axiosInstance<ResCloth[]>("models");
  return data;
};

export const getCollectionModels = async ({
  collectionId,
}: {
  collectionId: number;
}): Promise<ResCloth[]> => {
  const { data } = await axiosInstance<ResCloth[]>("models/collection", {
    params: { collectionId },
  });
  return data;
};

export const getCollectionAndCategoryModels = async ({
  collectionId,
  categoryId,
}: {
  collectionId: number;
  categoryId: number;
}): Promise<ResCloth[]> => {
  const { data } = await axiosInstance<ResCloth[]>(
    "models/category-collection",
    {
      params: { collectionId, categoryId },
    }
  );
  return data;
};

export const getCategoryModels = async ({
  categoryId,
}: {
  categoryId: number;
}): Promise<ResCloth[]> => {
  const { data } = await axiosInstance<ResCloth[]>("models/category", {
    params: { categoryId },
  });
  return data;
};

export const createModel = async (
  data: AddModelFormFields & { images: IImage[] }
): Promise<Cloth> => {
  const { data: models } = await axiosInstance.post<Cloth>("models", data);
  return models;
};

export const editModel = async (
  data: AddModelFormFields & { images: IImage[] } & { modelId: string }
): Promise<Cloth> => {
  const { data: model } = await axiosInstance.put<Cloth>("models", data);
  return model;
};
