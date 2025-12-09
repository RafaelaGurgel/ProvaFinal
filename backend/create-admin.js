import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
  const email = "admin@wayne.com";
  const password = "1234";
  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, password: hashed, role: "admin" }
  });

  console.log("Admin criado/atualizado:", email);
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
