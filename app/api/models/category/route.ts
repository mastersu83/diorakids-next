import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const categoryId = req.nextUrl.searchParams.get("categoryId") || "";

  const collectionModels = await prisma.cloth.findMany({
    where: {
      categoryId: Number(categoryId) === 0 ? undefined : Number(categoryId),
    },
    include: {
      sizes: true,
      images: true,
      collection: true,
      category: true,
    },
    orderBy: { id: "asc" },
  });

  return NextResponse.json(collectionModels);
}
