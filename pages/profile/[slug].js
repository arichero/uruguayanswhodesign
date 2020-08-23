import { useRouter } from 'next/router'

const Profile = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Profile: {slug}</p>
}

export default Profile
