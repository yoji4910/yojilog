import { auth, signOut } from '@/app/auth'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const session = await auth()

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div>ログイン済みユーザーのみ表示</div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button
          type='submit'
          className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
        >
          ログアウト
        </button>
      </form>
    </div>
  )
}
