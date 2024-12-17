import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { AddModelFormFields } from "@/components/form/AddModelForm";

export async function GET(req: NextRequest) {
  const models = await prisma.cloth.findMany({
    include: {
      sizes: true,
      images: true,
      collection: true,
      category: true,
    },
    orderBy: { id: "asc" },
  });

  return NextResponse.json(models);
}

export async function POST(req: NextRequest) {
  const {
    name,
    sizes,
    article,
    categoryId,
    wbLink,
    collectionId,
    price,
    description,
    images,
  }: AddModelFormFields & { images: { imageUrl: string }[] } = await req.json();

  const newImages = images.map((image) => ({ imageUrl: image.imageUrl }));

  const newModel = await prisma.cloth.create({
    data: {
      name: name,
      sizes: {
        create: sizes,
      },
      price: Number(price),
      description: description,
      wbLink: wbLink,
      collectionId: Number(collectionId),
      article: article,
      categoryId: Number(categoryId),
      images: { create: newImages },
    },
    include: { sizes: true, images: true, category: true, collection: true },
  });

  return NextResponse.json(newModel);
}
export async function PUT(req: NextRequest) {
  const {
    name,
    sizes,
    article,
    categoryId,
    wbLink,
    collectionId,
    price,
    description,
    images,
    modelId,
  }: AddModelFormFields & { images: { imageUrl: string }[] } & {
    modelId: string;
  } = await req.json();

  const newImages = images.map((image) => ({ imageUrl: image.imageUrl }));
  const newSizes = sizes.map((size) => ({
    size: size.size,
    isValue: size.isValue,
  }));

  await prisma.image.deleteMany({ where: { clothId: Number(modelId) } });
  await prisma.size.deleteMany({ where: { clothId: Number(modelId) } });

  const editModel = await prisma.cloth.update({
    where: { id: Number(modelId) },
    data: {
      name: name,
      sizes: {
        create: newSizes,
      },
      price: Number(price),
      description: description,
      wbLink: wbLink,
      collectionId: Number(collectionId),
      article: article,
      categoryId: Number(categoryId),
      images: { create: newImages },
    },
    include: { sizes: true, images: true, category: true, collection: true },
  });

  return NextResponse.json(editModel);
}
