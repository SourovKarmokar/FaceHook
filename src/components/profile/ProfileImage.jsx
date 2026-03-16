import React from 'react'
import { useProfile } from '../../hooks/useProfile'
import useAxios from '../../hooks/useAxios'

const ProfileImage = () => {
    const{state, dispatch} = useProfile()
    const {api} = useAxios()
  return (
    <div className='relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]'>
        <img 
        className='max-w-full rounded-full'
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`} 
        alt={state?.user?.firstName} />
      
    </div>
  )
}

export default ProfileImage
