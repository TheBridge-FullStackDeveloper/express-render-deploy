const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const food1 = await prisma.food.create({
    data: { name: 'Pizza', price: 10.99 },
  });
  console.log(`Created food with id: ${food1.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });