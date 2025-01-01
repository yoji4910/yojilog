import { auth } from '@/auth'
import Link from 'next/link'
import { SignOutButton } from '../SignOutButton'

export async function Header() {
  const session = await auth()

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        <h1 className='text-xl font-bold'>
          <Link href='/'>YojiLog</Link>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/logs/new'>ログをつける</Link>
            </li>
            <li>
              {session ? (
                <SignOutButton />
              ) : (
                // NOTE: ログインでNEXT_DIRECTエラーが出るので、一旦使わない
                // <Link href='/sign-in'>ログイン</Link>
                <Link href={'/api/auth/signin'}>ログイン</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
