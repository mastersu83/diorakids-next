import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const collectionId = req.nextUrl.searchParams.get("collectionId") || "";
  const collectionModels = await prisma.cloth.findMany({
    where: { collectionId },
    include: {
      sizes: true,
      images: true,
    },
  });

  return NextResponse.json(collectionModels);
}
