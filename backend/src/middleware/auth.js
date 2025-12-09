import jwt from "jsonwebtoken";

export function authRequired(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "Token ausente" });
  const token = header.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token ausente" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { id, email, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
}

export function allowRoles(...roles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "Token ausente" });
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Permissão negada" });
    }
    next();
  };
}
