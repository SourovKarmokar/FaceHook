import React from 'react'

const AuthLabel = ({children , className}) => {
  return (
    <div className={`leading-[138%] lg:text-lg ${className}`}>
      {children}
    </div>
  )
}

export default AuthLabel
