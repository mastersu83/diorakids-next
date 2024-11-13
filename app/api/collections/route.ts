import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/mongoose/db";
import { Collection } from "@/mongoose/models/collectionModel";

export async function GET(req: NextRequest) {
  await dbConnect();

  // const _id = req.nextUrl.searchParams.get("_id") || "";

  // const category = await Category.find({ _id });
  const collections = await Collection.find();

  return NextResponse.json(collections);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const findCollection = await Collection.findOne({ name: data.name });

  if (!findCollection) {
    const collection = await Collection.create(data);
    return NextResponse.json(collection);
  }

  return NextResponse.json({ message: "Такая модель уже есть" });
}
