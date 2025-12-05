const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function list(req, res) {
  const resources = await prisma.resource.findMany();
  res.json(resources);
}

async function getById(req, res) {
  const id = Number(req.params.id);
  const resource = await prisma.resource.findUnique({ where: { id } });
  if (!resource) return res.status(404).json({ error: 'Recurso não encontrado' });
  res.json(resource);
}

async function create(req, res) {
  const { name, description, quantity } = req.body;
  const resource = await prisma.resource.create({
    data: { name, description, quantity: quantity || 1 }
  });
  res.json(resource);
}

async function update(req, res) {
  const id = Number(req.params.id);
  const { name, description, quantity } = req.body;
  const resource = await prisma.resource.update({
    where: { id },
    data: { name, description, quantity }
  });
  res.json(resource);
}

async function remove(req, res) {
  const id = Number(req.params.id);
  await prisma.resource.delete({ where: { id } });
  res.json({ success: true });
}

module.exports = { list, getById, create, update, remove };
