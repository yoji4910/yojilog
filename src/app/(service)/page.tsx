import { prisma } from '@/lib/prisma'

export default async function Home() {
  const logs = await prisma.log.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <main className='flex flex-col gap-8 justify-center items-center w-full max-w-6xl p-8'>
      {logs.map((log) => (
        <div key={log.id} className='rounded w-full border border-black p-4'>
          <p className='text-black'>{log.content}</p>
          <time className='text-sm text-neutral-500'>
            {log.createdAt.toString()}
          </time>
        </div>
      ))}
    </main>
  )
}
