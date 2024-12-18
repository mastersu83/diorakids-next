import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const collectionId = req.nextUrl.searchParams.get("collectionId") || "";
  const collectionModels = await prisma.cloth.findMany({
    where: { collectionId: Number(collectionId) },
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
