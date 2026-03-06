const Card = ({children, className= ""}) => {
  return (
    <div className={`rounded-md border border-[#3F3F3F] bg-mediumDark px-4 py-4 lg:px-7 lg:py-5 ${className}`}>
      {children}
    </div>
  )
}

export default Card
