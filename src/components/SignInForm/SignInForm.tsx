import { signIn } from '@/auth'

export function SignInForm() {
  return (
    <form
      action={async (formData) => {
        'use server'
        try {
          console.log('before login')
          const res = await signIn('credentials', formData)
          console.log('after login')
          console.log('res: ', res)
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
      <button type='submit'>Sign In</button>
    </form>
  )
}
