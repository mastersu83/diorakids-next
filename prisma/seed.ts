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
  await prisma.collection.deleteMany();
  await prisma.category.deleteMany();
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
