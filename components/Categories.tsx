"use client";

import { useState } from "react";
import { categories } from "@/consts/categories";

interface ICategories {
  props: any;
}

export const Categories = ({ props }: ICategories) => {
  const [categoriesId, setCategoriesId] = useState<number>(0);

  return (
    <div className="h-14 w-max border border-customBlue rounded-2xl p-1.5 flex items-center justify-between gap-x-4 mb-10">
      <div className="flex items-center justify-between gap-x-2">
        <div
          onClick={() => setCategoriesId(0)}
          className={`${
            categoriesId === 0
              ? "bg-customBlue text-white"
              : "hover:bg-customBlueLight hover:border hover:border-customBlue"
          } py-2.5 px-6 cursor-pointer transition-all duration-300 rounded-2xl border border-white`}
        >
          Все
        </div>
        {categories.map((c) => (
          <div
            onClick={() => setCategoriesId(c.id)}
            className={`${
              categoriesId === c.id
                ? "bg-customBlue text-white"
                : "hover:bg-customBlueLight hover:border hover:border-customBlue"
            } py-2.5 px-6 cursor-pointer transition-all duration-700 rounded-2xl border border-white`}
            key={c.id}
          >
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
};
