import { PrismaClient } from '@prisma/client'

// このコードブロックは初回インポート時に1回だけ実行される
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// 既存のインスタンスがあればそれを使用し、
// なければ新しいインスタンスを作成
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

// 開発環境でのみグローバルオブジェクトに保存
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
