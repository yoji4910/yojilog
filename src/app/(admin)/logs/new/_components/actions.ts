'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const PostSchema = z.object({
  content: z.string().min(1, { message: '内容は必須です' }),
})

export const createLog = async (formData: FormData) => {
  try {
    const validatedData = PostSchema.parse({
      content: formData.get('content'),
    })

    const post = await prisma.log.create({
      data: {
        content: validatedData.content,
        // TODO: 認証機能作成後まで固定値とする
        authorId: 'cm57vprqc00004d0irlf0cies',
      },
    })

    return { success: true, data: post }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors }
    }
    return { success: false, error: '投稿の作成に失敗しました' }
  }
}
