"use client";

import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import useSWR, { useSWRConfig } from "swr";
import { getCollections } from "@/service/collectionsApi";
import { getCollectionModels } from "@/service/clothesApi";

export const Collections = () => {
  const { data: collections } = useSWR("collections", getCollections);
  const { mutate } = useSWRConfig();
  const [collectionId, setCollectionId] = useState<string>("0");

  const handleCollectionModels = async (collectionId: string) => {
    setCollectionId(collectionId);
    await mutate("cloth", () => getCollectionModels({ collectionId }));
  };

  if (!collections) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="text-3xl mb-5">Коллекции</div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <MenuButton
          setItemId={setCollectionId}
          itemId={collectionId}
          item={{ id: "0", name: "Все" }}
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
