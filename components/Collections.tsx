"use client";

import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCollections } from "@/service/collectionsApi";
import { useModelStore } from "@/store/models";
import { Skeleton } from "@radix-ui/themes";

export const Collections = () => {
  const { data: collections, isLoading } = useSWR(
    "collections",
    getCollections
  );
  const { setModels, collectionId, categoryId } = useModelStore(
    (state) => state
  );

  // const [collectionId, setCollectionId] = useState<string>("0");

  const handleCollectionModels = (collectionId: number) => {
    console.log(collectionId);
    setModels({
      categoryId,
      collectionId,
    });
  };

  return (
    <div className="">
      <div className="text-3xl mb-5">Коллекции</div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        {isLoading ? (
          [1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-12 w-full">
              <Skeleton
                loading={isLoading}
                className="py-2.5 px-6 h-full w-full"
              />
            </div>
          ))
        ) : (
          <>
            {!isLoading && (
              <MenuButton
                setItemId={handleCollectionModels}
                itemId={collectionId}
                item={{
                  id: 0,
                  name: "Все",
                  createdAt: new Date(),
                  updatedAt: new Date(),
                }}
              />
            )}
            {collections &&
              collections.map((c) => (
                <MenuButton
                  key={c.id}
                  setItemId={handleCollectionModels}
                  itemId={collectionId}
                  item={c}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};
