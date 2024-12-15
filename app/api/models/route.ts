import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { AddModelFormFields } from "@/components/form/AddModelForm";

export async function GET(req: NextRequest) {
  const models = await prisma.cloth.findMany({
    include: {
      sizes: true,
      images: true,
    },
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
      collectionId: collectionId,
      article: article,
      categoryId: categoryId,
      images: { create: newImages },
    },
    include: { sizes: true, images: true, category: true, collection: true },
  });

  return NextResponse.json(newModel);
}
