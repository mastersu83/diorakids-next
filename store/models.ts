import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { cloth } from "@prisma/client";
import { ResCloth } from "@/types/types";

interface State {
  models: ResCloth[];
  model: ResCloth;
  setModel: (model: cloth) => void;
  setModels: (categoryId: string, collectionId: string) => void;
}

export const useModelStore = create<State>()(
  devtools(
    (set) => ({
      models: [],
      model: {} as cloth,
      setModels: async (models: ResCloth[]) => {
        set({ models });
      },
      setModel: async (model: ResCloth) => {
        set({ model });
      },
    }),
    { name: "model" }
  )
);
