import React from 'react'

const IconButton = ({children ,onClick, className= ""}) => {
  return (
    <div onClick={onClick} className={`flex-center rounded-md bg-lighterDark  p-1.5  font-medium  text-white hover:bg-deepDark ${className}`} >
      {children}
    </div>
  )
}

export default IconButton
