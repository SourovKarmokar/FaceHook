import React from 'react'

const PostAvatar = ({children , className= ""}) => {
  return (
    <div className={`max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px] ${className}`}>
      {children}
    </div>
  )
}

export default PostAvatar
