import { size } from "@prisma/client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ISizesTable {
  sizes: size[] | undefined;
}

export const SizesTable = ({ sizes }: ISizesTable) => {
  const [sizeId, setSizeId] = useState<string>("");
  return (
    <div className="flex flex-col gap-y-5">
      <div className="text-lg">Таблица размеров</div>
      <div className="flex gap-x-5">
        {sizes &&
          sizes.map(
            (size) =>
              size.isValue && (
                <div
                  key={size.id}
                  onClick={() => setSizeId(size.id)}
                  className={cn(
                    sizeId === size.id
                      ? "border-2 border-customBlue rounded-2xl"
                      : "",
                    "bg-blue-50 w-20 h-20 flex items-center justify-center rounded-2xl cursor-pointer"
                  )}
                >
                  <span>{size.size}</span>
                </div>
              )
          )}
      </div>
    </div>
  );
};
