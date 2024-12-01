import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // ここにデータ作成のコードを書きます
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
