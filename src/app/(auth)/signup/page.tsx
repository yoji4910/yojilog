import { SignupForm } from '@/components/SignupForm/SignupForm'

export default function SignupPage() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>会員登録</h1>
      <SignupForm />
    </div>
  )
}
