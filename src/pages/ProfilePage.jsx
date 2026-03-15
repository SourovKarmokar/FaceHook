import { useAuth } from '../hooks/useAuth'
import useAxios from '../hooks/useAxios'
import { useEffect} from 'react'
import {useProfile} from '../hooks/useProfile'
import { actions } from '../actions'

const ProfilePage = () => {
  const { state, dispatch } = useProfile()
  const { api } = useAxios();
  const { auth } = useAuth()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        dispatch({type: actions.profile.DATA_FETCHING})
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        )
        if (response.status === 200 ){
          dispatch({type: actions.profile.DATA_FETCHED , data: response.data})
        }
      } catch (error) {
        console.error(error)
        dispatch({type: actions.profile.DATA_FETCH_ERROR, error: error.message})
      } 
    }
    fetchProfile()
  }, []) 

  if (state?.loading) return <div>Fetching your Profile data...</div>
  if (state?.error) return <div>Something went wrong!</div>

  return (
    <div>
      Welcome, {state?.user?.firstName} {state?.user?.lastName} 
      <p>You have {state?.posts.length}</p>
    </div>
  )
}

export default ProfilePage