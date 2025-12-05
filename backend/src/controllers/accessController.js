const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function logAccess(req, res) {
  const { resourceId, action } = req.body;
  const userId = req.user.id;
  if (!resourceId || !action) return res.status(400).json({ error: 'resourceId e action são obrigatórios' });

  const log = await prisma.accessLog.create({
    data: { userId, resourceId, action }
  });

  res.json(log);
}

async function listLogs(req, res) {
  const logs = await prisma.accessLog.findMany({
    include: { user: true, resource: true },
    orderBy: { createdAt: 'desc' }
  });
  res.json(logs);
}

module.exports = { logAccess, listLogs };
