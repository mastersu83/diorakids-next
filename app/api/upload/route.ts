import fs from "fs";
import { NextResponse } from "next/server";

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
  return NextResponse.json({ success: true, fileName });
}
