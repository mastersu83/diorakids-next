import { prisma } from "./prisma-client";

async function up() {
  await prisma.collection.createMany({
    data: [
      {
        name: "Львята",
      },
      {
        name: "Ленивцы",
      },
    ],
  });
  await prisma.category.createMany({
    data: [
      {
        name: "Комбинезоны",
      },
      {
        name: "Кофты",
      },
      {
        name: "Боди",
      },
      {
        name: "Штаны",
      },
      {
        name: "Ползунки",
      },
      {
        name: "Распашенки",
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Collection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cloth" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Image" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
