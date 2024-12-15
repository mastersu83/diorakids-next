import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const collectionId = req.nextUrl.searchParams.get("collectionId") || "";
  const categoryId = req.nextUrl.searchParams.get("categoryId") || "";
  const collectionModels = await prisma.cloth.findMany({
    where: { collectionId, categoryId },
    include: {
      sizes: true,
      images: true,
    },
  });

  return NextResponse.json(collectionModels);
}
