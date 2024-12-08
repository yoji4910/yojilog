import { PrismaClient } from '@prisma/client'
import { saltAndHashPassword } from './../src/utils/password'

const prisma = new PrismaClient()

async function main() {
  // ここにデータ作成のコードを書きます
  const pwHashed = await saltAndHashPassword('password')
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      hashedPassword: pwHashed,
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
