import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const collections = await prisma.collections.findMany();

  return NextResponse.json(collections);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  const findCollection = await prisma.collections.findFirst({
    where: { name },
  });

  if (!findCollection) {
    const collection = await prisma.collections.create({ data: { name } });
    return NextResponse.json(collection);
  }

  return NextResponse.json({
    name: "Такая коллекция уже есть",
  });
}
