import { ProductItem } from "@/components/ProductItem";

export const Content = () => {
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
