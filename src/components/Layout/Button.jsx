const Button = ({children , className= "" }) => {
    return (
        <div className={`flex-center gap-2 rounded-md bg-lighterDark px-5 py-2.5 text-sm font-medium text-white hover:bg-deepDark lg:text-lg ${className}`}>
            {children}
        </div>
    )
}

export default Button