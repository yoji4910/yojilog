import { prisma } from '@/lib/prisma'
import { saltAndHashPassword, verifyPassword } from '@/utils/password'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = await signInSchema.parseAsync(credentials)

        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        })

        const isValid = await verifyPassword(
          password,
          user?.hashedPassword ?? '',
        )
        if (!isValid) {
          throw new Error('Invalid credentials.')
        }

        return user
      },
    }),
  ],
  session: {
    // NOTE: デフォルトで`jwt`なので明示する必要はない
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
})
