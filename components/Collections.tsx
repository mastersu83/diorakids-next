"use client";

import { MenuButton } from "@/components/MenuButton";
import useSWR from "swr";
import { getCollections } from "@/service/collectionsApi";
import { useModelStore } from "@/store/models";

export const Collections = () => {
  const { data: collections } = useSWR("collections", getCollections);
  const { setModels, collectionId, categoryId } = useModelStore(
    (state) => state
  );

  const handleCollectionModels = (collectionId: number) => {
    setModels({
      categoryId,
      collectionId,
    });
  };

  if (!collections) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sticky top-10 flex flex-col gap-y-4 h-auto">
      <div className="text-3xl">Коллекции</div>
      <MenuButton
        setItemId={handleCollectionModels}
        itemId={collectionId}
        item={{ id: 0, name: "Все" }}
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
  );
};
