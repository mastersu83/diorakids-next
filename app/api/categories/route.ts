import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const categories = await prisma.category.findMany({
    include: {
      models: {
        include: {
          sizes: true,
          images: { orderBy: { id: "asc" } },
          collection: true,
          category: true,
        },
      },
    },
    orderBy: { id: "asc" },
  });

  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  const findCategory = await prisma.category.findFirst({
    where: { name },
  });

  if (!findCategory) {
    const category = await prisma.category.create({ data: { name } });
    return NextResponse.json(category);
  }

  return NextResponse.json({
    name: "Такая категория уже есть",
  });
}
