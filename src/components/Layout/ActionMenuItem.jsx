import React from 'react'

const ActionMenuItem = ({children , className}) => {
  return (
    <div className={`flex w-full items-center gap-2 text-gray-100 transition-all ${className}`}>
      {children}
    </div>
  )
}

export default ActionMenuItem
