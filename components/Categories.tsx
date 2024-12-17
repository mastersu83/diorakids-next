"use client";

import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCategories } from "@/service/categoriesApi";
import { useModelStore } from "@/store/models";

export const Categories = () => {
  const { data: categories } = useSWR("categories", getCategories);

  const { setModels, collectionId, categoryId } = useModelStore(
    (state) => state
  );

  const handleCollectionModels = async (categoryId: number) => {
    setModels({
      categoryId,
      collectionId,
    });
  };

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-14 w-max p-1.5 flex items-center justify-between gap-x-4 mb-10">
      <div className="flex items-center justify-between gap-x-2">
        <MenuButton
          setItemId={handleCollectionModels}
          itemId={categoryId}
          item={{
            id: 0,
            name: "Все",
            createdAt: new Date(),
            updatedAt: new Date(),
          }}
        />
        {categories.map((c) => (
          <MenuButton
            key={c.id}
            setItemId={handleCollectionModels}
            itemId={categoryId}
            item={c}
          />
        ))}
      </div>
    </div>
  );
};
