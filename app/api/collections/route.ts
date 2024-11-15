import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const collections = await prisma.collection.findMany();

  return NextResponse.json(collections);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  const findCollection = await prisma.collection.findFirst({
    where: { name },
  });

  if (!findCollection) {
    const collection = await prisma.collection.create({ data: { name } });
    return NextResponse.json(collection);
  }

  return NextResponse.json({
    name: "Такая коллекция уже есть",
  });
}
