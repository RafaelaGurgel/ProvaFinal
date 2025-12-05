// prisma.config.ts
import 'dotenv/config'
// No need to import defineConfig from '@prisma/internals'

export default {
  schema: 'prisma/schema.prisma', // Caminho para seu arquivo de schema
  migrations: {
    path: 'prisma/migrations',    // Onde as migrações são armazenadas
  },
  datasource: {
    url: process.env.DATABASE_URL, // A URL de conexão com o banco agora fica AQUI
  },
}