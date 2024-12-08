'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const PostSchema = z.object({
  title: z.string().min(1, { message: 'タイトルは必須です' }),
  content: z.string().min(1, { message: '内容は必須です' }),
})

export const createPost = async (formData: FormData) => {
  try {
    const validatedData = PostSchema.parse({
      title: formData.get('title'),
      content: formData.get('content'),
    })

    const post = await prisma.post.create({
      data: {
        title: validatedData.title,
        content: validatedData.content,
        // TODO: 認証機能作成後まで固定値とする
        authorId: 'cuid',
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
