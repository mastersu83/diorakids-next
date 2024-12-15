import Image from "next/image";
import { ResCloth } from "@/types/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ICategoryModels {
  models: ResCloth[] | undefined;
  modelId: string;
}

export const CategoryModels = ({ models, modelId }: ICategoryModels) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex gap-x-9">
        {models?.map((model) => (
          <Link key={model.id} href={`/model/${model.id}`}>
            <div>
              <Image
                width={130}
                height={160}
                src={`/uploads/${model.images[0].imageUrl}`}
                alt={"cloth"}
                className={cn(
                  modelId === model.id ? "border-2 border-customBlue" : "",
                  "rounded-2xl"
                )}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
