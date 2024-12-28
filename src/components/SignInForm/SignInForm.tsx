import { signIn } from '@/app/auth'

export function SignInForm() {
  return (
    <form
      action={async (formData) => {
        'use server'
        try {
          await signIn('credentials', formData, { redirectTo: '/' })
        } catch (error) {
          console.error('サインインに失敗しました:', error)
        }
      }}
      className='flex flex-col gap-2'
    >
      <label>
        Email
        <input name='email' type='email' />
      </label>
      <label>
        Password
        <input name='password' type='password' />
      </label>
      <button type='submit'>Sign In</button>
    </form>
  )
}
