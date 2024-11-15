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
