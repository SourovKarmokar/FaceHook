import { useAuth } from '../hooks/useAuth'
import useAxios from '../hooks/useAxios'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { api } = useAxios();
  const { auth } = useAuth()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true) 
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        )
        setUser(response?.data?.user);
        setPosts(response?.data?.posts)
      } catch (error) {
        console.error(error)
        setError(error) 
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [auth]) // ✅ auth dependency যোগ করো

  if (loading) return <div>Fetching your Profile data...</div>
  if (error) return <div>Something went wrong!</div>

  return (
    <div>
      {user?.firstName}
    </div>
  )
}

export default ProfilePage