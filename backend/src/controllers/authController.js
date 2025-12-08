const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* -------------------- REGISTER -------------------- */
exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Já existe usuário com esse email?
    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: "Email já está em uso" });
    }

    // Criptografando a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criando usuário
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role || "user", // Se não vier role, vira user
      },
    });

    res.json({ message: "Usuário registrado com sucesso!", user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
};

/* -------------------- LOGIN -------------------- */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(400).json({ error: "Credenciais inválidas" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ error: "Credenciais inválidas" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "6h" }
  );

  res.json({ message: "Login realizado com sucesso!", token, user });
};
