"use client";

import { collections } from "@/consts/collections";
import { useState } from "react";
import { ICollection } from "@/types/types";
import { Button } from "@/components/Button";

interface ICollectionsProps {
  collections: ICollection[];
}

export const Collections = ({ collections }: ICollectionsProps) => {
  const [collectionId, setCollectionId] = useState<string>("0");
  return (
    <div className="">
      <div className="text-3xl mb-5">Коллекции</div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <Button
          setItemId={setCollectionId}
          itemId={collectionId}
          item={{ _id: "0", name: "Все" }}
        />
        {collections.map((c) => (
          <Button
            key={c._id}
            setItemId={setCollectionId}
            itemId={collectionId}
            item={c}
          />
        ))}
      </div>
    </div>
  );
};
