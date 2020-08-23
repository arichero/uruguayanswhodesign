import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <h1>Slug: {slug.join('/')}</h1>
    </>
  )
}

export default Comment
