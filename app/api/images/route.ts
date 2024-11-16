import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import fs from "fs";

export async function GET(req: NextRequest) {
  const files = await prisma.image.findMany();

  return NextResponse.json(files);
}

export async function POST(req: Request) {
  const formData = await req.formData();

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

  const images = fileName.map((i) => {
    return { imageUrl: i, clothId: "6733979e0280633ce67e9441" };
  });

  await prisma.image.createMany({ data: images });

  return NextResponse.json({ success: true });
}
