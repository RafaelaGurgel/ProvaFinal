const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("1234", 10);

  await prisma.user.upsert({
    where: { email: "admin@admin.com" }, // <-- ARRUMADO
    update: {},
    create: {
      name: "Admin",
      email: "admin@admin.com",
      password: password,
      role: "ADMIN",
    },
  });

  console.log("Seed completo: usuário admin criado!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
