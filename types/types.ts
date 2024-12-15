import { category, cloth, collection, image, size } from "@prisma/client";

export interface ICategory {
  id: string;
  name: string;
}

export interface ICollection {
  id: string;
  name: string;
}

export type ISize = {
  _id: string;
  name: string;
  quantity: number;
};

export interface IImage {
  id: string;
  imageUrl: string;
}

export type ResCloth = cloth & { sizes: size[] } & { images: image[] } & {
  collection: collection;
} & { category: category };
