"use client";

import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCategories } from "@/service/categoriesApi";
import { useModelStore } from "@/store/models";
import { useEffect } from "react";

export const Categories = () => {
  const { data: categories } = useSWR("categories", getCategories);

  const { setModels, collectionId, categoryId, setCategories } = useModelStore(
    (state) => state
  );

  const handleCollectionModels = async (categoryId: number) => {
    setModels({
      categoryId,
      collectionId,
    });
  };

  useEffect(() => {
    if (categories) {
      setCategories(categories);
    }
  }, [categories]);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sticky top-[4px] h-14 w-max p-1.5 flex items-center justify-between gap-x-4 mb-10 bg-white/60 rounded-2xl z-20">
      <div className="flex items-center justify-between gap-x-2">
        <MenuButton
          setItemId={handleCollectionModels}
          itemId={categoryId}
          item={{ id: 0, name: "Все" }}
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
