import { devtools } from "zustand/middleware";
import { ResCategory, ResCloth } from "@/types/types";
import { create } from "zustand";
import {
  getCategoryModels,
  getCollectionAndCategoryModels,
  getCollectionModels,
  getModels,
} from "@/service/clothesApi";
import { Cloth } from "@prisma/client";

interface State {
  models: ResCloth[];
  model: ResCloth;
  editMode: boolean;
  categoryId: number;
  collectionId: number;
  category: string;
  collection: string;
  categories: ResCategory[];
  activeCategoryId: number;
  setEditMode: (editMode: boolean) => void;
  setModel: (model: ResCloth) => void;
  setModels: ({
    categoryId,
    collectionId,
  }: {
    categoryId: number;
    collectionId: number;
  }) => void;
  setCategories: (categories: ResCategory[]) => void;
}

export const useModelStore = create<State>()(
  devtools(
    (set) => ({
      models: [],
      model: {} as Cloth,
      editMode: false,
      categoryId: 0,
      collectionId: 0,
      categories: [],
      activeCategoryId: 0,
      setModels: async ({
        categoryId,
        collectionId,
      }: {
        categoryId: number;
        collectionId: number;
      }) => {
        if (collectionId === 0 && categoryId === 0) {
          const models = await getModels();
          set({
            models,
            collectionId,
            categoryId,
            activeCategoryId: categoryId,
          });
        }
        if (collectionId !== 0 && categoryId === 0) {
          const models = await getCollectionModels({ collectionId });
          set({
            models,
            collectionId,
            categoryId,
            activeCategoryId: categoryId,
          });
        }
        if (collectionId === 0 && categoryId !== 0) {
          const models = await getCategoryModels({ categoryId });
          set({
            models,
            collectionId,
            categoryId,
            activeCategoryId: categoryId,
          });
        }
        if (collectionId !== 0 && categoryId !== 0) {
          const models = await getCollectionAndCategoryModels({
            collectionId,
            categoryId,
          });
          set({
            models,
            categoryId,
            collectionId,
            activeCategoryId: categoryId,
          });
        }
      },
      setModel: async (model: ResCloth) => {
        set({
          model,
          category: model.category.name,
          collection: model.collection.name,
        });
      },
      setEditMode: async (editMode: boolean) => {
        set({ editMode });
      },
      setCategories: async (categories: ResCategory[]) => {
        set({ categories });
      },
    }),
    { name: "model" }
  )
);
