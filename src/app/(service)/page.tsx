import { prisma } from '@/lib/prisma'

export default async function Home() {
  const posts = await prisma.log.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          {posts.map((log) => (
            <div key={log.id}>
              <h2 className='text-xl font-semibold mb-2'>{log.title}</h2>
              <time className='text-sm text-neutral-500'>
                {log.createdAt.toString()}
              </time>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
