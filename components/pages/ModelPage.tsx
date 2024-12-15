"use client";

import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";
import { Slider } from "@/components/Slider";
import Image from "next/image";
import { CategoryModels } from "@/components/CategoryModels";
import { SizesTable } from "@/components/SizesTable";
import { ProductItem } from "@/components/ProductItem";
import useSWR from "swr";
import { getModels } from "@/service/clothesApi";
import { ResCloth } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserList from "@/components/UserList";
import { useModelStore } from "@/store/models";

interface IModelPage {
  modelId: string;
}

export const ModelPage = ({ modelId }: IModelPage) => {
  const { data } = useSWR<ResCloth[]>("clothPage", getModels);
  const setModel = useModelStore((state) => state.setModel);

  const [mainImageIndex, setMainImageIndex] = useState<number>(0);

  const model = data && data.find((m) => m.id === modelId);
  useEffect(() => {
    if (model) {
      setModel(model);
    }
  }, [model]);

  if (!data?.length && !model) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <CustomBreadcrumbs />
      <div className="grid grid-cols-2 gap-x-6">
        <div className="grid grid-cols-[130px_1fr] justify-items-center">
          <Slider
            images={model?.images}
            setMainImageIndex={setMainImageIndex}
            mainImageIndex={mainImageIndex}
          />
          <div>
            <Image
              width={510}
              height={700}
              src={`/uploads/${model?.images[mainImageIndex].imageUrl}`}
              alt={"cloth"}
              className="rounded-2xl"
            />
            <div className="text-3xl font-bold mt-4">{model?.price} р.</div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="text-4xl">{model?.name}</div>
          <CategoryModels models={data} modelId={modelId} />
          <SizesTable sizes={model?.sizes} />
          <div>{model?.description}</div>
          <div>Артикул: {model?.article}</div>
          <div>
            Ссылка:
            <Link
              target="_blank"
              className="underline"
              href={model ? model.wbLink : ""}
            >
              Перейти к покупке
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold mt-16 mb-11">Рекомендации</div>
        <div className="flex justify-between gap-x-5 mb-6">
          {data &&
            data.map((cloth) => <ProductItem key={cloth.id} cloth={cloth} />)}
        </div>
      </div>
    </div>
  );
};
