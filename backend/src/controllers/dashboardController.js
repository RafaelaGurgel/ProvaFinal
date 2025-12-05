const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function stats(req, res) {
  const totalUsers = await prisma.user.count();
  const totalResources = await prisma.resource.count();
  const logsLast24h = await prisma.accessLog.count({
    where: {
      createdAt: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    }
  });

  res.json({ totalUsers, totalResources, logsLast24h });
}

module.exports = { stats };
