"use client";

import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCollections } from "@/service/collectionsApi";
import { useModelStore } from "@/store/models";

export const Collections = () => {
  const { data: collections } = useSWR("collections", getCollections);
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

  if (!collections) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="text-3xl mb-5">Коллекции</div>
      <div className="flex flex-col items-center justify-center gap-y-5">
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
        {collections.map((c) => (
          <MenuButton
            key={c.id}
            setItemId={handleCollectionModels}
            itemId={collectionId}
            item={c}
          />
        ))}
      </div>
    </div>
  );
};
