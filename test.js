const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const noticias = await prisma.noticia.findMany()
    console.log('Noticias:', noticias)
  } catch (error) {
    console.error('Error al acceder a la base de datos:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
