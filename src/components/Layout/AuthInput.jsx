import React from 'react'

const AuthInput = ({children , className}) => {
  return (
    <div className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-lighterDark  p-1.5 focus:outline-none lg:p-3 ${className}`}>
      {children}
    </div>
  )
}

export default AuthInput
