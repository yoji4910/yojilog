import { signOut } from '@/auth'

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut({ redirectTo: '/' })
      }}
    >
      <button type='submit'>ログアウト</button>
    </form>
  )
}
