"use client";

import { useState } from "react";
import { ICategory } from "@/types/types";
import { Button } from "@/components/Button";

interface ICategoriesProps {
  categories: ICategory[];
}

export const Categories = ({ categories }: ICategoriesProps) => {
  const [categoriesId, setCategoriesId] = useState<string>("0");

  return (
    <div className="h-14 w-max p-1.5 flex items-center justify-between gap-x-4 mb-10">
      <div className="flex items-center justify-between gap-x-2">
        <Button
          setItemId={setCategoriesId}
          itemId={categoriesId}
          item={{ _id: "0", name: "Все" }}
        />
        {categories.map((c) => (
          <Button
            key={c._id}
            setItemId={setCategoriesId}
            itemId={categoriesId}
            item={c}
          />
        ))}
      </div>
    </div>
  );
};
