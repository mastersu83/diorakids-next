import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/mongoose/db";
import { Category } from "@/mongoose/models/categoryModel";

export async function GET(req: NextRequest) {
  await dbConnect();

  // const _id = req.nextUrl.searchParams.get("_id") || "";

  // const category = await Category.find({ _id });
  const categories = await Category.find();

  return NextResponse.json(categories);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const findCategory = await Category.findOne({ name: data.name });

  if (!findCategory) {
    const category = await Category.create(data);
    return NextResponse.json(category);
  }

  return NextResponse.json({ message: "Такая модель уже есть" });
}
