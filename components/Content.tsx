"use client";

import { ProductItem } from "@/components/ProductItem";
import { useModelStore } from "@/store/models";
import { useEffect } from "react";

export const Content = () => {
  const { models, setModels, categoryId, collectionId } = useModelStore(
    (state) => state
  );

  useEffect(() => {
    setModels({ collectionId, categoryId });
  }, []);

  if (!models?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-12 mb-10 sticky top-0">
      {models.map((card) => (
        <ProductItem key={card.id} cloth={card} />
      ))}
    </div>
  );
};
