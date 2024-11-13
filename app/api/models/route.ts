import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/mongoose/db";
import { Cloth } from "@/mongoose/models/clothModel";

export async function GET(req: NextRequest) {
  await dbConnect();

  // const _id = req.nextUrl.searchParams.get("_id") || "";

  // const category = await Category.find({ _id });
  const clothes = await Cloth.find().populate("collectionId categoryId");

  return NextResponse.json(clothes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const findCloth = await Cloth.findOne({ name: data.name });

  if (!findCloth) {
    const cloth = await Cloth.create(data);
    return NextResponse.json(cloth);
  }

  return NextResponse.json({ message: "Такая модель уже есть" });
}
