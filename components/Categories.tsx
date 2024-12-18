"use client";

import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCategories } from "@/service/categoriesApi";
import { useModelStore } from "@/store/models";
import { Skeleton } from "@radix-ui/themes";

export const Categories = () => {
  const { data: categories, isLoading } = useSWR("categories", getCategories);

  const { setModels, collectionId, categoryId } = useModelStore(
    (state) => state
  );

  const handleCollectionModels = async (categoryId: number) => {
    setModels({
      categoryId,
      collectionId,
    });
  };

  return (
    <div className="sticky top-0 z-20 w-1/2 bg-white rounded-2xl h-14 p-1.5 flex items-center justify-between gap-x-4 mb-10">
      <div className="flex items-center justify-between gap-x-2 w-full">
        <Skeleton
          loading={isLoading}
          className="py-2.5 px-6 h-12 w-full rounded-2xl"
        >
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
          {categories &&
            categories.map((c) => (
              <MenuButton
                key={c.id}
                setItemId={handleCollectionModels}
                itemId={categoryId}
                item={c}
              />
            ))}
        </Skeleton>
        {/*<Skeleton className="py-2.5 px-6 h-12 w-full rounded-2xl" />*/}
      </div>
    </div>
  );
};
