'use server'

import { auth } from '@/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const PostSchema = z.object({
  content: z.string().min(1, { message: '内容は必須です' }),
})

export const createLog = async (formData: FormData) => {
  console.log('FormData:', formData)
  const session = await auth()
  const sessionEmail = session?.user?.email

  if (!sessionEmail) {
    return { success: false, error: 'ログイン情報取得失敗' }
  }

  const user = await prisma.user.findUnique({
    where: { email: sessionEmail },
  })

  if (!user) {
    return { success: false, error: 'ログイン情報取得失敗' }
  }

  const parsed = PostSchema.safeParse({
    content: formData.get('content'),
  })

  if (!parsed.success) {
    console.error('パースエラー: ', parsed.error)
    return { success: false, error: 'パースエラー' }
  }

  try {
    const post = await prisma.log.create({
      data: {
        content: parsed.data.content,
        // TODO: 認証機能作成後まで固定値とする
        authorId: user.id,
      },
    })

    return { success: true, data: post }
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }
    return { success: false, error: '投稿の作成に失敗しました' }
  }
}
