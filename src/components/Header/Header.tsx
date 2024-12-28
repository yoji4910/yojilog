import Link from 'next/link'

export function Header() {
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
          </ul>
        </nav>
      </div>
    </header>
  )
}
