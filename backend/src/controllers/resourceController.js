import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getResources(req, res) {
  try {
    const list = await prisma.resource.findMany({ orderBy: { createdAt: "desc" }});
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar recursos" });
  }
}

export async function createResource(req, res) {
  try {
    const { name, type, status } = req.body;
    const item = await prisma.resource.create({ data: { name, type, status: status || "ativo" }});
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar recurso" });
  }
}

export async function updateResource(req, res) {
  try {
    const id = Number(req.params.id);
    const { name, type, status } = req.body;
    const item = await prisma.resource.update({ where: { id }, data: { name, type, status }});
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar recurso" });
  }
}

export async function deleteResource(req, res) {
  try {
    const id = Number(req.params.id);
    await prisma.resource.delete({ where: { id }});
    res.json({ message: "Recurso removido" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao remover recurso" });
  }
}
