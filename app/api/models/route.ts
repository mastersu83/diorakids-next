import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

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
    images,
    price,
    description,
    wbLink,
    collectionId,
    article,
    categoryId,
  } = await req.json();

  // const newSizes = await prisma.size.createMany({
  //   data: upload,
  // });

  const findModel = await prisma.cloth.findFirst({
    where: { name },
  });

  if (!findModel) {
    const newModel = await prisma.cloth.create({
      data: {
        name,
        sizes: {
          create: sizes,
        },
        images: { create: images },
        price,
        description,
        wbLink,
        collectionId,
        article,
        categoryId,
      },
    });

    return NextResponse.json({ newModel });
  }

  return NextResponse.json({
    name: "Такая модель уже есть",
  });
}
