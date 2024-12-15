import { devtools } from "zustand/middleware";
import { cloth } from "@prisma/client";
import { ResCloth } from "@/types/types";
import { create } from "zustand";
import {
  getCollectionAndCategoryModels,
  getCollectionModels,
  getModels,
} from "@/service/clothesApi";

interface State {
  models: ResCloth[];
  model: ResCloth;
  editMode: boolean;
  categoryId: string;
  collectionId: string;
  setEditMode: (editMode: boolean) => void;
  setModel: (model: ResCloth) => void;
  setModels: ({
    categoryId,
    collectionId,
  }: {
    categoryId: string;
    collectionId: string;
  }) => void;
}

export const useModelStore = create<State>()(
  devtools(
    (set) => ({
      models: [],
      model: {} as cloth,
      editMode: false,
      categoryId: "0",
      collectionId: "0",
      setModels: async ({
        categoryId,
        collectionId,
      }: {
        categoryId: string;
        collectionId: string;
      }) => {
        console.log(collectionId, categoryId);
        if (collectionId === "0" && categoryId === "0") {
          const models = await getModels();
          set({ models, collectionId, categoryId });
        }
        if (collectionId !== "0" && categoryId === "0") {
          const models = await getCollectionModels({ collectionId });
          set({ models, collectionId, categoryId });
        }
        if (collectionId !== "0" && categoryId !== "0") {
          const models = await getCollectionAndCategoryModels({
            collectionId,
            categoryId,
          });
          set({ models, categoryId, collectionId });
        }
      },
      setModel: async (model: ResCloth) => {
        set({ model });
      },
      setEditMode: async (editMode: boolean) => {
        set({ editMode });
      },
    }),
    { name: "model" }
  )
);
