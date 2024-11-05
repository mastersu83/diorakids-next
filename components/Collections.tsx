"use client";

import { collections } from "@/consts/collections";
import { useState } from "react";

interface ICollections {
  props: any;
}

export const Collections = ({ props }: ICollections) => {
  const [collectionId, setCollectionId] = useState<number>(0);
  return (
    <div className="">
      <div className="text-3xl mb-5">Коллекции</div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div
          onClick={() => setCollectionId(0)}
          className={`${
            collectionId === 0
              ? "bg-customBlue text-white"
              : "hover:bg-customBlueLight"
          } text-center w-full h-12 py-2.5 px-6 rounded-2xl cursor-pointer transition-all duration-300 border border-customBlue`}
        >
          Все
        </div>
        {collections.map((c) => (
          <div
            onClick={() => setCollectionId(c.id)}
            className={`${
              collectionId === c.id
                ? "bg-customBlue text-white"
                : "hover:bg-customBlueLight"
            } py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 w-full rounded-2xl cursor-pointer transition-all duration-300`}
            key={c.id}
          >
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
};
