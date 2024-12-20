"use client";

import { ProductItem } from "@/components/ProductItem";
import { useModelStore } from "@/store/models";
import { useEffect } from "react";
import { Skeleton } from "@radix-ui/themes";

export const Content = () => {
  const { models, setModels } = useModelStore((state) => state);

  useEffect(() => {
    setModels({ collectionId: 0, categoryId: 0 });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-12 mb-10">
      {!models?.length
        ? [1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex flex-col w-[350px] h-[516px] gap-y-5 rounded-2xl overflow-hidden"
            >
              {/*<Skeleton className="rounded-2xl w-[350px] h-full" />*/}
              <Skeleton className="w-full h-full" />
            </div>
          ))
        : models.map((card) => <ProductItem key={card.id} cloth={card} />)}
    </div>
  );
};
