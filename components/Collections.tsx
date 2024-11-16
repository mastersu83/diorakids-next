"use client";

import { useState } from "react";
import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCollections } from "@/service/collectionsApi";

export const Collections = () => {
  const { data: collections } = useSWR("collections", getCollections);
  const [collectionId, setCollectionId] = useState<string>("0");

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
            setItemId={setCollectionId}
            itemId={collectionId}
            item={c}
          />
        ))}
      </div>
    </div>
  );
};
