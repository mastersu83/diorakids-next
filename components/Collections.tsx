"use client";

import { useState } from "react";
import { ICollection } from "@/types/types";
import { Button } from "@/components/Button";
import { MenuButton } from "@/components/MenuButton";

interface ICollectionsProps {
  collections: ICollection[];
}

export const Collections = ({ collections }: ICollectionsProps) => {
  const [collectionId, setCollectionId] = useState<string>("0");
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
