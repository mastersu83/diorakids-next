import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { ISize } from "@/types/types";

export async function GET(req: NextRequest) {
  const models = await prisma.models.findMany({
    include: {
      collection: true,
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

  const findModel = await prisma.models.findFirst({
    where: { name },
  });

  if (!findModel) {
    // const newSizes = await prisma.sizes.createMany({ data: sizes });
    const newModel = await prisma.models.create({
      data: {
        name,
        sizes,
        images,
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
    findModel,
  });
}
