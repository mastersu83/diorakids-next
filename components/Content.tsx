"use client";

import { ProductItem } from "@/components/ProductItem";
import { useModelStore } from "@/store/models";
import { useEffect } from "react";

export const Content = () => {
  const { models, setModels } = useModelStore((state) => state);

  useEffect(() => {
    setModels({ collectionId: 0, categoryId: 0 });
  }, []);

  if (!models?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-12 mb-10">
      {models.map((card) => (
        <ProductItem key={card.id} cloth={card} />
      ))}
    </div>
  );
};
