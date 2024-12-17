import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import fs from "fs";
import { IImage } from "@/types/types";

export async function GET(req: NextRequest) {
  const files = await prisma.image.findMany();

  return NextResponse.json(files);
}

export async function POST(req: NextRequest) {
  "use server";
  const fileName = [];
  const formData = await req.formData();
  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      const file = formDataEntryValue;
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`public/images/${file.name}`, buffer);
      fileName.push(file.name);
    }
  }

  const imagesCloth: IImage[] = fileName.map((i, index) => {
    return { imageUrl: i, id: index + 1 };
  });
  return NextResponse.json(imagesCloth);
}
