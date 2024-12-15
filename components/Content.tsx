"use client";

import { ProductItem } from "@/components/ProductItem";
import useSWR from "swr";
import { getModels } from "@/service/clothesApi";
import { ResCloth } from "@/types/types";

export const Content = () => {
  const { data } = useSWR<ResCloth[]>("cloth", getModels);

  if (!data?.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-12 mb-10">
      {data.map((card) => (
        <ProductItem key={card.id} cloth={card} />
      ))}
    </div>
  );
};
