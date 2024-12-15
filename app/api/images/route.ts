import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import fs from "fs";

export async function GET(req: NextRequest) {
  const files = await prisma.image.findMany();

  return NextResponse.json(files);
}

export async function POST(req: Request, res: NextResponse) {
  const formData = await req.formData();
  // const data = await req.formData();

  const fileName = [];
  const formDataEntryValues = Array.from(formData.values());
  for (const formDataEntryValue of formDataEntryValues) {
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      const file = formDataEntryValue as {
        name: string;
      } & Blob;
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(`public/uploads/${file.name}`, buffer);
      fileName.push(file.name);
    }
  }

  const imagesCloth = fileName.map((i, index) => {
    return { imageUrl: i, id: String(index + 1) };
  });

  return NextResponse.json(imagesCloth);
}
