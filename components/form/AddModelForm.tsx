"use client";

import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import React, { useState } from "react";

import useSWR from "swr";

import { FormTitle } from "@/components/form/FormTitle";
import { sizes } from "@/consts/data";
import { Input } from "@/components/form/Input";
import { getCategories } from "@/service/categoriesApi";
import { Box, Flex, Grid, Separator, Text } from "@radix-ui/themes";
import ButtonBox from "@/components/ButtonBox";
import { getCollections } from "@/service/collectionsApi";
import UploadForm from "@/components/UploadForm";
import { createModel, editModel } from "@/service/clothesApi";
import { useModelStore } from "@/store/models";
import { Image } from "@prisma/client";

export type AddModelFormFields = {
  name: string;
  categoryId: string;
  sizes: {
    size: number;
    isValue: boolean;
  }[];
  price: number;
  description: string;
  article: string;
  wbLink: string;
  collectionId: string;
};

export const AddModelForm = () => {
  const { model, editMode } = useModelStore((state) => state);
  const [images, setImages] = useState<Image[]>(
    model?.images ? model.images : []
  );

  const { data: categories } = useSWR("getCategoriesForm", getCategories);
  const { data: collections } = useSWR("getCollectionsForm", getCollections);
  const form = useForm<AddModelFormFields>({
    defaultValues: async () => {
      return {
        name: model.name,
        categoryId: String(model.categoryId),
        sizes: model?.sizes
          ? model.sizes
          : sizes.map((s) => ({ ...s, isValue: false })),
        article: model.article,
        description: model.description,
        price: model.price,
        wbLink: model.wbLink,
        collectionId: String(model.collectionId),
      };
    },
  });

  const { fields: fieldsSizeButtons, replace } = useFieldArray({
    name: "sizes",
    control: form.control,
  });

  const handleUploadImage = async (images: React.SetStateAction<Image[]>) => {
    setImages(images);
  };

  const onSubmit: SubmitHandler<AddModelFormFields> = async (data) => {
    console.log({ ...data, images, modelId: model.id });
    editMode
      ? await editModel({ ...data, images, modelId: model.id })
      : await createModel({ ...data, images });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormTitle title="Создание модели" />
        <Grid columns="1fr 30px 2fr" gapX="16px">
          <UploadForm images={images} setImages={handleUploadImage} />
          <Separator orientation="vertical" />
          <Box>
            <Input placeholder="Введите название" name="name" required />
            <Separator className="bg-customBlue my-2" />
            <Text>Коллекции</Text>
            <Grid
              columns={`repeat(${collections?.length}, max-content)`}
              my="10px"
              gapX="10px"
            >
              {collections &&
                collections.map((c) => (
                  <Flex justify="center" gapX="1" key={c.id}>
                    <div>
                      <Input
                        value={String(c.id)}
                        name={"collectionId"}
                        type="radio"
                        required
                      />
                    </div>
                    <p>{c.name}</p>
                  </Flex>
                ))}
            </Grid>
            <Separator className="bg-customBlue my-2" />
            <Text>Категории</Text>
            <Grid
              columns={`repeat(${categories?.length}, max-content)`}
              my="10px"
              gapX="10px"
            >
              {categories &&
                categories.map((c) => (
                  <Flex justify="center" gapX="1" key={c.id}>
                    <div>
                      <Input
                        value={String(c.id)}
                        name={"categoryId"}
                        type="radio"
                        required
                      />
                    </div>
                    <p>{c.name}</p>
                  </Flex>
                ))}
            </Grid>
            <Separator className="bg-customBlue my-2" />
            <Text>Размеры</Text>
            <Grid
              columns={`repeat(${fieldsSizeButtons?.length}, max-content)`}
              my="10px"
              gapX="10px"
            >
              {fieldsSizeButtons.map((s, index) => (
                <Flex justify="center" gapX="4px" key={s.id}>
                  <Input
                    name={`sizes.${index}.isValue`}
                    type="checkbox"
                    required={!form.watch("sizes").some((s) => s.isValue)}
                  />
                  {s.size}
                </Flex>
              ))}
            </Grid>
            <Input placeholder="Введите цену" name="price" required />
            <Input
              placeholder="Напишите описание"
              name="description"
              required
            />
            <Input placeholder="Введите артикул" name="article" required />
            <Input placeholder="Ссылка на ВБ" name="wbLink" required />
            <ButtonBox
              editMode={editMode}
              disable={form.formState.isSubmitting}
            />
          </Box>
        </Grid>
      </form>
    </FormProvider>
  );
};
