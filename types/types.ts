export interface ICategory {
  _id: string;
  name: string;
}

export interface ICollection {
  _id: string;
  name: string;
}

export type ISize = {
  _id: string;
  name: string;
  quantity: number;
};
