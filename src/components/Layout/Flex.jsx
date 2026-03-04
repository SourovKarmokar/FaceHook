const Flex = ({children , className }) => {
   return(
    <div className={`flex items-center justify-between ${className}`}>
        {children}
    </div>
   )
}

export default Flex