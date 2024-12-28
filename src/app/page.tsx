import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  console.log('posts.count: ', posts.length)
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className='group rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-300 hover:bg-neutral-50'
              tabIndex={0}
              aria-label={post.title}
            >
              <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
              <time className='text-sm text-neutral-500'>
                {post.createdAt.toString()}
              </time>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
