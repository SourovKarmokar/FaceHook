const FormControl = ({children , className= ""}) => {
  return (
    <div className={`mb-6 space-y-2.5 ${className}`}>
      {children}
    </div>
  )
}

export default FormControl
