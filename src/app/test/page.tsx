import { repositoryName } from '@/prismicio'

export default async function Page() {
  return (
    <>
      <div>test page</div>
      <div>{repositoryName}</div>
    </>
  )
}
