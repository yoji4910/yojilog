import { prisma } from '@/lib/prisma'
import { saltAndHashPassword } from '@/utils/password'

export function SignupForm() {
  return (
    <form
      action={async (formData) => {
        'use server'
        try {
          const email = formData.get('email')?.toString()
          const password = formData.get('password')?.toString()

          if (!email || !password) {
            throw new Error('Email and password are required')
          }

          const hashedPassword = await saltAndHashPassword(password)

          await prisma.user.create({
            data: {
              email,
              hashedPassword,
            },
          })
        } catch (e) {
          console.error(e)
        }
      }}
      className='flex flex-col gap-2'
    >
      <label className='flex gap-2'>
        Email
        <input name='email' type='email' />
      </label>
      <label className='flex gap-2'>
        Password
        <input name='password' type='password' />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
