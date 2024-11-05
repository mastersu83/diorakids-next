import { ProductItem } from "@/components/ProductItem";

interface IProducts {
  props: any;
}

export const Content = ({ props }: IProducts) => {
  return (
    <div className="grid grid-cols-3 gap-12 mb-10">
      <ProductItem props="/" />
      <ProductItem props="/" />
      <ProductItem props="/" />
      <ProductItem props="/" />
      <ProductItem props="/" />
      <ProductItem props="/" />
    </div>
  );
};
