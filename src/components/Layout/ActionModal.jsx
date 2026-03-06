import React from 'react'

const ActionModal = ({children , className = ""}) => {
  return (
    <div className={`card absolute right-full top-6 min-w-[200px] divide-y divide-[#3F3F3F] py-2 [&>button]:py-2 ${className}`}>
      {children}
    </div>
  )
}

export default ActionModal
