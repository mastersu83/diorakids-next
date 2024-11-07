import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const categories = await prisma.categories.findMany();

  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  const findCategory = await prisma.categories.findFirst({
    where: { name },
  });

  if (!findCategory) {
    const category = await prisma.categories.create({ data: { name } });
    return NextResponse.json(category);
  }

  return NextResponse.json({
    name: "Такая категория уже есть",
  });
}
