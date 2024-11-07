import { prisma } from "./prisma-client";

async function up() {
  await prisma.collections.createMany({
    data: [
      {
        name: "Львята",
      },
      {
        name: "Ленивцы",
      },
    ],
  });
  await prisma.categories.createMany({
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
  await prisma.collections.deleteMany();
  await prisma.categories.deleteMany();
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
