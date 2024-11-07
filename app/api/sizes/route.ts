// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/prisma/prisma-client";
//
// export async function GET(req: NextRequest) {}
//
// export async function POST(req: NextRequest) {
//   const { size } = await req.json();
//
//   const findSize = await prisma.sizes.findFirst({
//     where: { size },
//   });
//
//   if (!findSize) {
//     const collection = await prisma.sizes.create({
//       data: { size },
//     });
//     return NextResponse.json(collection);
//   }
//
//   return NextResponse.json({
//     name: "Такая коллекция уже есть",
//   });
// }
