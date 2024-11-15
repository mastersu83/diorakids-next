import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";

export async function GET(req: NextRequest) {
  const files = await fs.readdir("./public/uploads");

  return NextResponse.json(files);
}

// export async function POST(req: NextRequest) {
//     const data = await req.json();
//
//     const findCategory = await Category.findOne({ name: data.name });
//
//     if (!findCategory) {
//         const category = await Category.create(data);
//         return NextResponse.json(category);
//     }
//
//     return NextResponse.json({ message: "Такая модель уже есть" });
// }
