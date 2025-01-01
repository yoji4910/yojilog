'use client'

import { Button } from '@/components/Button/Button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { createLog } from './actions'

export default function Form() {
  const router = useRouter()

  const session = useSession()
  const userId = session.data?.user?.id

  const handleSubmit = async (formData: FormData) => {
    try {
      // TODO: APIエンドポイントに投稿データを送信
      await createLog(formData)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      action={handleSubmit}
      className='flex w-full flex-col gap-4 max-w-2xl mx-auto p-6'
    >
      <div className='flex flex-col gap-2'>
        <label
          htmlFor='content'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          内容
        </label>
        <textarea
          name='content'
          id='content'
          required
          className='flex min-h-96 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
          placeholder='投稿の内容を入力'
          aria-label='投稿の内容'
        />
      </div>

      <Button type='submit' className='w-full'>
        投稿を作成
      </Button>
    </form>
  )
}
