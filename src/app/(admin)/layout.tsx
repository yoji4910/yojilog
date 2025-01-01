import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <>{session ? children : <p className='text-black'>ログインが必要です</p>}</>
  )
}
