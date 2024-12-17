import { Category, Cloth, Collection, Image, Size } from "@prisma/client";

export interface ICategory {
  id: string;
  name: string;
}

export interface ICollection {
  id: number;
  name: string;
}

export type ISize = {
  _id: string;
  name: string;
  quantity: number;
};

export interface IImage {
  id: number;
  imageUrl: string;
}

export type ResCloth = Cloth & { sizes: Size[] } & { images: Image[] } & {
  collection: Collection;
} & { category: Category };

export type ResCategory = Category & { models: ResCloth[] };
