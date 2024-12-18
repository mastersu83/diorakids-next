"use client";

import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";
import Image from "next/image";
import { CategoryModels } from "@/components/CategoryModels";
import { SizesTable } from "@/components/SizesTable";
import useSWR from "swr";
import { getModels } from "@/service/clothesApi";
import { ResCloth } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useModelStore } from "@/store/models";
import { Grid } from "@radix-ui/themes";
import { Slider } from "@/components/Slider";

interface IModelPage {
  modelId: number;
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
    <div className="pb-5">
      <CustomBreadcrumbs />
      <Grid columns="3fr 4fr" gapX="24px">
        <Grid columns="max-content 3fr" gapX="12px" justify="center">
          <Slider
            images={model?.images ? model?.images : []}
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
            {/*<div className="text-3xl font-bold mt-4">{model?.price} р.</div>*/}
          </div>
        </Grid>
        <div className="flex flex-col gap-y-5">
          <div className="text-4xl">{model?.name}</div>
          <CategoryModels
            categoryId={model?.categoryId ? model.categoryId : 0}
            models={data}
            modelId={modelId}
          />
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
      </Grid>
    </div>
  );
};
