import { SignInForm } from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>サインイン</h1>
      <SignInForm />
    </div>
  )
}
