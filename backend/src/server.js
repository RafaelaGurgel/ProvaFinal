require("dotenv").config();
const app = require("./app"); // <- carrega app.js dentro de src

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
